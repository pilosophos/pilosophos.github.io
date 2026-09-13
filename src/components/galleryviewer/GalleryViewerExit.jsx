import { createSignal, Match, onMount, Switch } from "solid-js";

export default function GalleryViewerExit(props) {
  // run props.onExit if defined
  // link to document.referrer if referrerHost is pilosophos.com
  // link to art gallery otherwise

  const [backTarget, setBackTarget] = createSignal();

  onMount(() => {
    const referrerHost = new URL(document.referrer).host;
    console.log(document.referrer)
    if (referrerHost.includes("localhost:") || referrerHost === "pilosophos.com") {
      setBackTarget(document.referrer);
    }
  });

  return (
    <nav class="py-2 border-b border-stone-500 mb-3 text-start">
      <Switch fallback={
          <a id="back" href="/art" class="muted hover:text-pi-cyan font-display text-xl">
            ← To the Pilosophos art gallery
          </a>
      }>
        <Match when={props.onExit}>
          <a id="back" href="/art" class="muted hover:text-pi-cyan font-display text-xl">
            Close <span class="text-4xl relative top-1.5">&times;</span>
          </a>
        </Match>

        <Match when={props.onExit === undefined && backTarget() !== undefined}>
          <a id="back" href={ backTarget() } class="muted hover:text-pi-cyan font-display text-xl">
            ← Back
          </a>
        </Match>
      </Switch>
    </nav>
  )
}