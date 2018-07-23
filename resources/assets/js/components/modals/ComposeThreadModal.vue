<template>
    <modal name="compose-thread" transition="pop-out" height="auto">
        <div class="box">
        </div>
    </modal>
</template>

<script>
    export default {
        name: 'ComposeThreadModal',
        data() {
            return {
                form: new Form({})
            }
        },
    }
</script>