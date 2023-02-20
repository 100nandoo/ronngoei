<script lang="ts">
  import Fa from 'svelte-fa'

  export let icon: import('@fortawesome/free-brands-svg-icons').IconDefinition | undefined
  export let color = ''
</script>

<Fa {icon} style="color:{color}" class="pr-1" size="sm" />
