'use client';
// npm install react-paginate
import type { ComponentType } from 'react';
import ReactPaginateModule from 'react-paginate';
import type { ReactPaginateProps } from 'react-paginate';
import css from './Pagination.module.css';

type PaginateComponent = ComponentType<ReactPaginateProps>;
type PossiblyWrapped =
  | PaginateComponent
  | { default: PaginateComponent | { default: PaginateComponent } };

// react-paginate — старый UMD-пакет. Разные бандлери (Vite/esbuild на
// клієнті та Next.js/webpack на сервері при SSR-пререндері) по-різному
// розгортають його default-експорт: іноді напряму, іноді один раз
// обгорнутий, іноді двічі. Тому визначаємо глибину розгортання в
// рантаймі за допомогою typeof, а не жорстко "зашиваємо" один варіант.
function resolvePaginateComponent(mod: PossiblyWrapped): PaginateComponent {
  if (typeof mod === 'function') {
    return mod;
  }

  const level1 = mod.default;

  if (typeof level1 === 'function') {
    return level1;
  }

  return level1.default;
}

const ReactPaginate = resolvePaginateComponent(
  ReactPaginateModule as unknown as PossiblyWrapped
);

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedPage: number) => void;
}

export default function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const handlePageClick = (selectedItem: { selected: number }) => {
    onPageChange(selectedItem.selected + 1);
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={handlePageClick}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
      renderOnZeroPageCount={null}
    />
  );
}