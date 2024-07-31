<template>
  <svg
    class="svg-filter"
    width="20.000000"
    height="20.000000"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <clipPath id="clip6079_226">
      <rect
        rx="-0.500000"
        width="19.000000"
        height="19.000000"
        transform="translate(0.500000 0.500000)"
        fill="white"
        fill-opacity="0"
      />
    </clipPath>
    <g opacity="0.800000">
      <rect
        rx="-0.500000"
        width="19.000000"
        height="19.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fill-opacity="0"
      />
      <g clip-path="url(#clip6079_226)">
        <path
          d="M5.02 10.81L5 10.83C4.53 10.83 4.16 10.46 4.16 10C4.16 9.53 4.53 9.16 5 9.16L5.02 9.18L5.02 10.81ZM14.98 9.18L15 9.16C15.46 9.16 15.83 9.53 15.83 10C15.83 10.46 15.46 10.83 15 10.83L14.98 10.81L14.98 9.18ZM2.52 5.81L2.5 5.83C2.03 5.83 1.66 5.46 1.66 5C1.66 4.53 2.03 4.16 2.5 4.16L2.52 4.18L2.52 5.81ZM17.48 4.18L17.5 4.16C17.96 4.16 18.33 4.53 18.33 5C18.33 5.46 17.96 5.83 17.5 5.83L17.48 5.81L17.48 4.18ZM7.52 15.81L7.5 15.83C7.03 15.83 6.66 15.46 6.66 15C6.66 14.53 7.03 14.16 7.5 14.16L7.52 14.18L7.52 15.81ZM12.48 14.18L12.5 14.16C12.96 14.16 13.33 14.53 13.33 15C13.33 15.46 12.96 15.83 12.5 15.83L12.48 15.81L12.48 14.18Z"
          fill="#28282D"
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <path
          d="M5 10L15 10M2.5 5L17.5 5M7.5 15L12.5 15"
          stroke="#28282D"
          stroke-opacity="1.000000"
          stroke-width="1.670000"
          stroke-linejoin="round"
        />
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.svg-filter {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  cursor: pointer;
  transition: $default-transition;
}
</style>
