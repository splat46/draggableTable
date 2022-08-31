<script>
    import { Icon, Menu } from "svelte-hero-icons";
    import { writable } from "svelte/store";
    
    const data = writable([
        {
            nr: "1",
            name: "Johannes",
            age: "34",
            city: "Amsterdam",
            speciality: "Cleaning dishes",
            active: "No"
        },
        {
            nr: "2",
            name: "Alexander",
            age: "82",
            city: "Groenlo",
            speciality: "Energy",
            active: "Yes"
        },
        {
            nr: "3",
            name: "Stekelenburg",
            age: "12",
            city: "Den Haag",
            speciality: "Pixelator",
            active: "Yes"
        },
        {
            nr: "4",
            name: "Huiskes",
            age: "77",
            city: "Utrecht",
            speciality: "Precision",
            active: "No"
        },
        {
            nr: "5",
            name: "Ruby",
            age: "75",
            city: "Den Helder",
            speciality: "Consumption",
            active: "No"
        },
        {
            nr: "6",
            name: "Joke",
            age: "56",
            city: "Breda",
            speciality: "Eyesight",
            active: "Yes"
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
                    <button class="drag">
                        <Icon src={Menu} class="w-5 h-5" solid />
                    </button>
                </td>
                <td>{item.nr}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
                <td>{item.speciality}</td>
                <td>{item.active}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    thead {
        @apply text-left;
    }
    th {
        @apply bg-slate-700 py-4 px-8;
    }
    td {
        @apply py-2.5 px-8 font-light;
    }
    tbody tr {
        @apply border-slate-700 border-y;
    }
    .dragged {
        @apply bg-slate-900 opacity-10 relative z-10 border-y-2 border-dashed;
    }
    .target {
        @apply bg-slate-500;
    }
    tr td:first-child {
        @apply pr-0;
    }
    .drag {
        @apply cursor-move translate-y-1;
    }
</style>