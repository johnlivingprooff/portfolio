<template>
    <div class="navbar">
        <NuxtLink
            v-for="link in links"
            :key="link.id"
            :to="link.url"
            class="link"
        >
            {{ link.label }}
        </NuxtLink>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { id: 1, label: 'Home', url: '/' },
                // { id: 2, label: 'About', url: '#about' },
                { id: 3, label: 'Projects', url: '/projects' },
                // { id: 4, label: 'Feedback', url: '#testimonials' },
                { id: 5, label: 'Blog', url: '/blog' },
                { id: 6, label: 'Contact', url: '#contact' },
            ],
        };
    },
    methods: {
        currentUrl() {
            return window.location.pathname;
        },
        isActive(url) {
            return url === this.currentUrl();
        },
    },
};
</script>

<style scoped>
.navbar {
    margin: 2px;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 40%;
    transform: translateY(-50%);
    z-index: 500;
}

a {
    color: grey;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 15px;
    margin-bottom: 10px;
    transform: rotate(90deg);
    transform-origin: left center;
}

a.active {
    color: white;
}

a.inactive {
    color: grey;
}

.link {
    margin: 10px;
    padding: 35px;
}

.link:hover {
    color: white;
    transition: 0.5s;
}
</style>