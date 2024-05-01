<script lang="ts">
  export let image: ImageMetadata
  export let description: string
</script>

<div class="flex w-full max-w-[267px] flex-col items-center gap-8 text-center">
  <img alt="Graph" src={image.src} width={image.width} height={image.height} />
  <p class="text-xl">{description}</p>
</div>
