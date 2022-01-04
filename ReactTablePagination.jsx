import React from 'react';
import PropTypes from 'prop-types';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  FormGroup,
  Input,
} from 'reactstrap';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import ChevronDoubleRightIcon from 'mdi-react/ChevronDoubleRightIcon';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';
import ChevronDoubleLeftIcon from 'mdi-react/ChevronDoubleLeftIcon';

const ReactTablePagination = ({
  dataLength,
  page,
  gotoPage,
  canPreviousPage,
  pageOptions,
  pageSize,
  pageIndex,
  previousPage,
  nextPage,
  canNextPage,
  setPageSize,
  manualPageSize,
}) => {
  // console.log(pageOptions)
  const arrayPageIndex = (pageIndex - 2) < 0
    ? pageOptions.slice(0, pageIndex + 3)
    : pageOptions.slice((pageIndex - 2), (pageIndex + 3));

  return (
    <Pagination className="pagination" dir="ltr">
      <div className="pagination">
        <PaginationLink
          className="pagination__link pagination__link--arrow"
          type="button"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <ChevronDoubleLeftIcon className="pagination__link-icon" />
        </PaginationLink>
        <PaginationLink
          className="pagination__link pagination__link--arrow"
          type="button"
          onClick={previousPage}
          disabled={!canPreviousPage}
        >
          <ChevronLeftIcon className="pagination__link-icon" />
        </PaginationLink>
        {arrayPageIndex.map(i => (
          <PaginationItem
            className="pagination__item"
            active={pageIndex === i}
            key={i}
          >
            <PaginationLink
              key={i}
              className="pagination__link"
              type="button"
              onClick={() => gotoPage(i)}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem className="pagination__item">
          <PaginationLink
            className="pagination__link pagination__link--arrow"
            type="button"
            onClick={nextPage}
            disabled={!canNextPage}
          >
            <ChevronRightIcon className="pagination__link-icon" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="pagination__item">
          <PaginationLink
            className="pagination__link pagination__link--arrow"
            type="button"
            onClick={() => gotoPage(pageOptions.length - 1)}
            disabled={!canNextPage}
          >
            <ChevronDoubleRightIcon className="pagination__link-icon" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="pagination__item pagination-info">
          Showing {pageSize * pageIndex + 1} to {pageSize * pageIndex + page.length} of {dataLength}
        </PaginationItem>
        {manualPageSize.length > 1 && (
          <PaginationItem className="pagination__item">
            <FormGroup className="pagination__select-form ">
              <Input
                className="pagination__item pagination-info"
                type="select"
                name="select"
                id="exampleSelect"
                value={pageSize}
                onChange={(event) => {
                  setPageSize(Number(event.target.value));
                }}
              >
                {manualPageSize.map(item => (
                  <option className="pagination__item pagination__item-option" key={item} value={item}>
                    Show {item}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </PaginationItem>
        )}
      </div>
    </Pagination>
  );
};

ReactTablePagination.propTypes = {
  dataLength: PropTypes.number.isRequired,
  page: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  gotoPage: PropTypes.func.isRequired,
  canNextPage: PropTypes.bool.isRequired,
  canPreviousPage: PropTypes.bool.isRequired,
  pageOptions: PropTypes.arrayOf(PropTypes.number).isRequired,
  pageSize: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  setPageSize: PropTypes.func.isRequired,
  manualPageSize: PropTypes.arrayOf(PropTypes.number),
};

ReactTablePagination.defaultProps = {
  manualPageSize: [10, 20, 30, 40],
};

export default ReactTablePagination;
