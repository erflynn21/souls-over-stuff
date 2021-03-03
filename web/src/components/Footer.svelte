<script>
    const year = new Date().getFullYear();

    let name, email;

    const emailSignup = () => {
        console.log(name);
        console.log(email);
    };
</script>

<footer class="max-w-full font-light my-6 bottom-0">
    <div class="text-center mb-8">
        <h4 class="text-lg">
            Get posts on finding the right priorities in life straight to your
            inbox.
        </h4>

        <div class="my-4">
            <input
                class="bg-gray-100 rounded p-2"
                type="text"
                required
                placeholder="Name"
                bind:value={name}
            />
            <input
                class="bg-gray-100 rounded p-2 ml-4"
                type="email"
                required
                placeholder="Email Address"
                bind:value={email}
            />
            <button class="ml-4" on:click|preventDefault={emailSignup}
                >Get Updates</button
            >
        </div>
    </div>

    <div class="copyright flex justify-center">
        Copyright &copy; {year} Souls Over Stuff &middot; Website by
        <a href="https://www.cumulus-creative.com/">
            Cumulus Creative Services</a
        >
    </div>
</footer>
