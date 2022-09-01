<script>
    import Table from "./lib/Table.svelte";
</script>

<main class="min-h-full flex justify-center items-center">
    <div class="container">
        <div class="flex flex-col w-full max-w-4xl mx-auto text-slate-300 font-mono">
            <div class="md:w-2/3 mb-8 text-slate-400 drop-shadow-xl shadow-primary">
                <h1 class="title">Draggable Table</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing, velit in imperdiet ultrices.
                </p>
            </div>
    
            <div class="relative bg-slate-800 w-full rounded-sm">
                <div class="absolute -inset-2 bg-gradient-to-r from-secondary via-primary to-secondary opacity-10 blur-2xl"></div>
                <div class="relative bg-slate-800 z-10 pb-4 overflow-x-auto rounded-md">
                    <Table />
                </div>
            </div>
        </div>
    </div>
</main>

<style>
.title {
    @apply bg-gradient-to-r from-secondary/90 via-primary to-secondary bg-clip-text text-4xl tracking-tight text-transparent mb-4;
}
</style>
