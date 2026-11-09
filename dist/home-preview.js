(() => {
  const cards = [...document.querySelectorAll('.homes-grid > .home-card')];
  if (cards.length !== 3) return;

  const mobile = matchMedia('(max-width: 700px)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const first = cards[0];
  const overlay = document.createElement('div');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.inert = true;
  Object.assign(overlay.style, {
    position: 'absolute', inset: '0', overflow: 'hidden', pointerEvents: 'none'
  });

  const panels = cards.map(card => {
    const panel = document.createElement('div');
    for (const child of card.children) panel.append(child.cloneNode(true));
    panel.querySelectorAll('[id]').forEach(node => node.removeAttribute('id'));
    panel.hidden = true;
    overlay.append(panel);
    return panel;
  });

  const original = [...first.children];
  let index = 0, interval, animation, stopped = false, touchStart;

  function reset() {
    clearInterval(interval);
    interval = undefined;
    animation?.cancel();
    animation = undefined;
    if (!overlay.isConnected) return;
    overlay.remove();
    first.style.removeProperty('position');
    original.forEach(node => node.style.removeProperty('opacity'));
  }

  async function advance() {
    const outgoing = overlay.animate([
      { opacity: 1, filter: 'blur(0px)' },
      { opacity: .08, filter: 'blur(8px)' }
    ], { duration: 580, easing: 'ease-in-out', fill: 'forwards' });
    animation = outgoing;
    try {
      await outgoing.finished;
    } catch {
      return;
    }
    if (animation !== outgoing || !overlay.isConnected) return;
    panels[index].hidden = true;
    index = (index + 1) % panels.length;
    panels[index].hidden = false;
    outgoing.cancel();
    animation = overlay.animate([
      { opacity: .08, filter: 'blur(8px)' },
      { opacity: 1, filter: 'blur(0px)' }
    ], { duration: 1420, easing: 'ease-in-out' });
  }

  function sync() {
    reset();
    if (stopped || scrollY > 0 || !mobile.matches || reducedMotion.matches || document.hidden) return;
    index = 0;
    panels.forEach((panel, i) => { panel.hidden = i !== 0; });
    first.style.position = 'relative';
    original.forEach(node => { node.style.opacity = '0'; });
    first.append(overlay);
    interval = setInterval(advance, 4000);
  }

  function stop() {
    if (!mobile.matches) return;
    stopped = true;
    reset();
  }

  addEventListener('scroll', () => { if (scrollY > 0) stop(); }, { passive: true });
  addEventListener('wheel', event => { if (event.deltaY) stop(); }, { passive: true });
  addEventListener('touchstart', event => {
    touchStart = event.touches.length === 1 ? event.touches[0].clientY : undefined;
  }, { passive: true });
  addEventListener('touchmove', event => {
    if (touchStart !== undefined && event.touches.length === 1 &&
        Math.abs(event.touches[0].clientY - touchStart) > 8) stop();
  }, { passive: true });
  mobile.addEventListener('change', sync);
  reducedMotion.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  sync();
})();
