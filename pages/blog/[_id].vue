<template>
  <div>
    <h1>Blog Post</h1>
    <p>Blog ID: {{ $route.params.id }}</p>
    <!-- Add your blog content here -->
  </div>
</template>

<script>
export default {
  // Fetch blog content using the ID parameter
  async fetch() {
    const blogId = this.$route.params.id;
    // Fetch blog content based on the ID
    // Example: Fetch blog post from an API using blogId
  }
}
</script>
