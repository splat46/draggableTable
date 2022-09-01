<script>
    import { Icon, Menu } from "svelte-hero-icons";
    import { writable } from "svelte/store";
    
    const data = writable([
        {
            nr: "1",
            name: "Samson",
            age: "34",
            city: "Amsterdam",
            speciality: "Cleaning dishes",
            active: false
        },
        {
            nr: "2",
            name: "John",
            age: "82",
            city: "Groenlo",
            speciality: "Energy",
            active: true
        },
        {
            nr: "3",
            name: "Emma",
            age: "12",
            city: "Den Haag",
            speciality: "Pixelator",
            active: true
        },
        {
            nr: "4",
            name: "Karly",
            age: "77",
            city: "Utrecht",
            speciality: "Precision",
            active: false
        },
        {
            nr: "5",
            name: "Ruby",
            age: "75",
            city: "Den Helder",
            speciality: "Consumption",
            active: false
        },
        {
            nr: "6",
            name: "Joke",
            age: "56",
            city: "Breda",
            speciality: "Eyesight",
            active: true
        }
    ]);

    let currentDragged = null;
    let targetPosition;

    const dragStart = (item, index) => {
        currentDragged = [index, item];
    }
    const dragOver = (index) => {
        targetPosition = index;
	}
    const dragEnd = () => {
        $data.splice(currentDragged[0], 1)
        $data.splice(targetPosition, 0, currentDragged[1])
        data.set($data)

        // Clear dragging
        currentDragged = null;
        targetPosition = null;
    }
</script>

<table class="table-border w-full">
    <thead>
        <tr>
            <th></th>
            <th>Nr</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Speciality</th>
            <th>Active</th>
        </tr>
    </thead>
    <tbody>
        {#each $data as item, index}
            <tr 
                on:dragstart={() => {dragStart(item, index)}}
                on:dragover|preventDefault={() => {dragOver(index)}}
                class:dragged={currentDragged && currentDragged[0] == index}
                class:target={targetPosition && targetPosition == index}
                on:dragend={() => {dragEnd()}}
                draggable={true}
            >
                <td>
                    <button class="drag-icon">
                        <Icon src={Menu} class="w-5 h-5" solid />
                    </button>
                </td>
                <td>{item.nr}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
                <td>{item.speciality}</td>
                <td>
                    {#if item.active}
                        <div class="w-2 h-2 block rounded-full bg-green-400 mx-auto"></div>
                        {:else}
                        <div class="w-2 h-2 block rounded-full bg-red-400 mx-auto"></div>
                    {/if}
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    
    thead {
        @apply text-left border border-slate-700 border-b-0;
    }
    th {
        @apply bg-slate-700 py-4 px-8 text-sm;
    }
    td {
        @apply py-2.5 px-8 font-light;
    }
    tbody tr {
        @apply border-slate-700 border-y;
    }
    .dragged {
        @apply bg-slate-900 relative z-10 border-y-2 border-dashed;
    }
    .target {
        @apply bg-slate-600;
    }
    tr td:first-child {
        @apply pr-0;
    }
    .drag-icon {
        @apply cursor-move translate-y-1 text-slate-600;
    }
</style>