@extends('components.layouts.pegawai')

@section('head')
    <style>
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background: #fff;
        }

        .dragging {
            opacity: 0.5;
        }

        .placeholder {
            background-color: #444;
            border: 2px dashed #fff;
            height: 2rem;
            /* Adjust to match item height */
        }
    </style>
@endsection

@section('body')
    <div x-data="dragAndDrop()" x-init="initialize()" class="p-6 flex flex-col gap-5 flex-wrap">
        <div class="flex gap-5 flex-wrap">
            <div x-ref="items" class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow"
                x-bind:data-index="0" draggable="true" @dragstart="startDrag($event)" @dragend="endDrag($event)"
                @dragover.prevent="dragOver($event)" @drop="drop($event)">
                <p>Total Kategori</p>
                <p class="text-7xl leading-snug text-center">{{ $kategoriCount }}</p>
                <p class="text-right">Kategori</p>
            </div>
            <div x-ref="items" class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow"
                x-bind:data-index="1" draggable="true" @dragstart="startDrag($event)" @dragend="endDrag($event)"
                @dragover.prevent="dragOver($event)" @drop="drop($event)">
                <p>Total Barang</p>
                <p class="text-7xl leading-snug text-center">{{ $barangCount }}</p>
                <p class="text-right">Barang</p>
            </div>
            <div x-ref="items" class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow"
                x-bind:data-index="3" draggable="true" @dragstart="startDrag($event)" @dragend="endDrag($event)"
                @dragover.prevent="dragOver($event)" @drop="drop($event)">
                <p>Total Siswa</p>
                <p class="text-7xl leading-snug text-center">{{ $siswaCount }}</p>
                <p class="text-right">Siswa</p>
            </div>
        </div>
        <div class="flex gap-5 flex-wrap">
            <div x-ref="items" class="bg-[#2a2a2a] h-64 p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow"
                x-bind:data-index="5" draggable="true" @dragstart="startDrag($event)" @dragend="endDrag($event)"
                @dragover.prevent="dragOver($event)" @drop="drop($event)">
            </div>
            <div x-ref="items" class="bg-[#2a2a2a] h-64 p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow"
                x-bind:data-index="6" draggable="true" @dragstart="startDrag($event)" @dragend="endDrag($event)"
                @dragover.prevent="dragOver($event)" @drop="drop($event)">
            </div>
            <div x-ref="items" class="bg-[#2a2a2a] h-64 p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow"
                x-bind:data-index="7" draggable="true" @dragstart="startDrag($event)" @dragend="endDrag($event)"
                @dragover.prevent="dragOver($event)" @drop="drop($event)">
            </div>
        </div>
        <div class="flex gap-5 flex-wrap">
            <div x-ref="items" class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow"
                x-bind:data-index="8" draggable="true" @dragstart="startDrag($event)" @dragend="endDrag($event)"
                @dragover.prevent="dragOver($event)" @drop="drop($event)">
            </div>
            <div class="flex gap-5 flex-wrap flex-col w-1/2">
                <div x-ref="items" class="bg-[#2a2a2a] h-64 p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow"
                    x-bind:data-index="9" draggable="true" @dragstart="startDrag($event)" @dragend="endDrag($event)"
                    @dragover.prevent="dragOver($event)" @drop="drop($event)">
                </div>
                <div x-ref="items" class="bg-[#2a2a2a] h-64 p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow"
                    x-bind:data-index="10" draggable="true" @dragstart="startDrag($event)" @dragend="endDrag($event)"
                    @dragover.prevent="dragOver($event)" @drop="drop($event)">
                </div>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script>
        function dragAndDrop() {
            return {
                draggingElement: null,
                originalPositions: [],
                placeholder: null,

                initialize() {
                    this.storeInitialPositions();
                    this.createPlaceholder();
                },

                storeInitialPositions() {
                    this.originalPositions = Array.from(this.$refs.items).map(item => ({
                        element: item,
                        parent: item.parentElement,
                        index: Array.from(item.parentElement.children).indexOf(item)
                    }));
                },

                createPlaceholder() {
                    this.placeholder = document.createElement('div');
                    this.placeholder.className = 'placeholder';
                    this.placeholder.style.display = 'none';
                },

                startDrag(event) {
                    this.draggingElement = event.target;
                    event.target.classList.add('dragging');
                    // Add placeholder to the document
                    if (!document.querySelector('.placeholder')) {
                        document.body.appendChild(this.placeholder);
                    }
                },

                endDrag(event) {
                    event.target.classList.remove('dragging');
                    if (this.placeholder.parentElement) {
                        this.placeholder.parentElement.removeChild(this.placeholder);
                    }
                },

                dragOver(event) {
                    event.preventDefault();
                    const target = event.target.closest('[x-ref="items"]');

                    if (target) {
                        this.handleDragOverItem(target);
                    } else if (event.target.closest('.dropzone')) {
                        this.handleDragOverEmptySpace(event.target);
                    }
                },

                handleDragOverItem(target) {
                    target.parentElement.insertBefore(this.placeholder, target.nextSibling);
                    this.placeholder.style.display = 'block';
                },

                handleDragOverEmptySpace(target) {
                    if (this.placeholder.parentElement) {
                        this.placeholder.parentElement.removeChild(this.placeholder);
                    }
                    this.placeholder.style.display = 'block';
                    const parent = target.parentElement;
                    parent.appendChild(this.placeholder);
                },

                drop(event) {
                    event.preventDefault();
                    const target = event.target.closest('[x-ref="items"]');

                    if (target) {
                        target.parentElement.insertBefore(this.draggingElement, this.placeholder);
                    } else if (event.target.closest('.dropzone')) {
                        const parent = event.target.closest('.flex');
                        parent.appendChild(this.draggingElement);
                    }
                    this.placeholder.style.display = 'none';
                },

                resetPosition() {
                    this.originalPositions.forEach(({
                        element,
                        parent,
                        index
                    }) => {
                        parent.insertBefore(element, parent.children[index] || null);
                    });
                }
            };
        }
    </script>
@endsection
