<script>
    export let segment;
</script>

<nav class="my-4 bg-white">
    <ul class="flex justify-center items-center">
        <li>
            <a
                class="{segment === 'about'
                    ? 'selected'
                    : ''} mx-4 font-light text-lg"
                href="about">About</a
            >
        </li>
        <li>
            <a
                class="{segment === undefined
                    ? 'selected'
                    : ''} mx-4 font-shippori text-xl"
                href=".">S / S</a
            >
        </li>
        <li>
            <a
                class="{segment === 'contact'
                    ? 'selected'
                    : ''} mx-4 font-light text-lg"
                href="contact">Contact</a
            >
        </li>
    </ul>
</nav>
