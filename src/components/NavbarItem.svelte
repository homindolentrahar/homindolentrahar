<script lang="ts">
  export let targetId: string;

  function smoothScroll(event: Event, targetId: string) {
    event.preventDefault();

    const target = document.getElementById(targetId);
    const navbar = document.querySelector("nav");

    if (!target || !navbar) return;

    const navbarHeight = (navbar as HTMLElement).offsetHeight;

    window.scrollTo({
      top: target.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  }
</script>

<span class="p-4">
  <a
    href={"#" + targetId}
    class="text-sm text-gray-500 hover:text-black hover:font-semibold transition-all duration-200"
    on:click={(e) => smoothScroll(e, targetId)}
  >
    <slot />
  </a>
</span>
