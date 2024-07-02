<script>
    import Footer from "$lib/Footer.svelte";
import Navbar from "$lib/Navbar.svelte";
import "../app.css"
</script>
<div class="">
    <Navbar/>
<slot />
<Footer/>
</div>
