<template>
    <div class="spinner-parent">
        <LogoImage class="spinner rotate" />
    </div>
</template>

<style>
    .spinner-parent {
        display: flex;
        justify-content: center;
    }
    .rotate {
        animation: rotation 5s infinite linear;
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
</style>