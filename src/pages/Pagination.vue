<template>
    <ul class="pagination">
        <li class="pagination-item">
            <button class="pagination-button" type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
                First
            </button>
        </li>
        <li class="pagination-item">
            <button class="pagination-button" type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">
                Previous
            </button>
        </li>

       <!--Visible buttons start-->

        <li class="pagination-item" v-for="page in pages" :key="page.name">
            <button class="pagination-button" :class="{ active: isPageActive(page) }" type="button" @click="onClickPage(page)" :disabled="page.isDisabled">
                {{ page.name }}
            </button>
        </li>

        <!--Visible buttons end-->

        <li class="pagination-item">
            <button class="pagination-button" type="button" @click="onClickNextPage" :disabled="isInLastPage">
                Next
            </button>
        </li>

        <li class="pagination-item">
            <button class="pagination-button" type="button" @click="onClickLastPage" :disabled="isInLastPage">
                Last
            </button>
        </li>
    </ul>
</template>

<script lang="ts">
import { Prop } from "vue-property-decorator";
import { Vue } from "vue-class-component";


export default class Pagination extends Vue {
  @Prop({ type: Number, required: false, default: 6 }) maxVisibleButtons!: number;
  @Prop({ type: Number, required: true }) totalPages!: number;
  @Prop({ type: Number, required: true }) perPage!: number;
  @Prop({ type: Number, required: true }) currentPage!: number;

  // Define computed properties
  get startPage(): number {
    if (this.currentPage === 1) {
      return 1;
    }

    if (this.currentPage === this.totalPages) {
      return Math.max(1, this.totalPages - this.maxVisibleButtons + 1);
    }

    return this.currentPage - 1;
  }

  get pages(): Array<{ name: number; isDisabled: boolean }> {
    const range: Array<{ name: number; isDisabled: boolean }> = [];

    for (
      let i = this.startPage;
      i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
      i++
    ) {
      range.push({
        name: i,
        isDisabled: i === this.currentPage,
      });
    }

    return range;
  }

  get isInFirstPage(): boolean {
    return this.currentPage === 1;
  }

  get isInLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }

  // Define methods
  onClickFirstPage(): void {
    this.$emit('pagechanged', 1);
    this.scrollToTop();
  }

  onClickPreviousPage(): void {
    this.$emit('pagechanged', this.currentPage - 1);
    this.scrollToTop();
  }

  onClickPage(page: { name: number }): void {
    this.$emit('pagechanged', page.name);
    this.scrollToTop();
  }

  onClickNextPage(): void {
    this.$emit('pagechanged', this.currentPage + 1);
    this.scrollToTop();
  }

  onClickLastPage(): void {
    this.$emit('pagechanged', this.totalPages);
    this.scrollToTop();
  }

  isPageActive(page: { name: number }): boolean {
    return this.currentPage === page.name;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}


</script>

<style>
    .pagination {
        list-style-type: none;
        align-items: center;
        justify-content: center;
    }

    .pagination-item {
        display: inline-block;
    }

    .pagination-button {
    border: 1px solid #333;
    text-decoration: none;
    padding: 8px 16px;
    font-family: 'Montserrat', sans-serif;;
    color: #333;
    background-color: #f7f7f7;
    }

    .active {
      background-color: #61d6c1;
      color: #ffffff;
    }
</style>
