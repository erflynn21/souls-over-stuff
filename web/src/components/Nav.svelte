<script>
    export let segment;
</script>

<nav class="my-6 bg-white">
    <ul class="flex justify-center items-center">
        <li>
            <a
                class="{segment === 'about'
                    ? 'selected'
                    : ''} mx-6 font-light text-lg"
                href="about">About</a
            >
        </li>
        <li class="w-8">
            <a
                class="{segment === undefined ? 'selected' : ''} text-2xl"
                href="."
            >
                <div class="font-shippori text-center">S</div>
                <div class="relative">
                    <div
                        class="absolute inset-0 flex items-center"
                        aria-hidden="true"
                    >
                        <div class="w-full border-t border-black" />
                    </div>
                </div>
                <div class="font-shippori text-center">S</div>
            </a>
        </li>
        <li>
            <a
                class="{segment === 'contact'
                    ? 'selected'
                    : ''} mx-6 font-light text-lg"
                href="contact">Contact</a
            >
        </li>
    </ul>
</nav>
