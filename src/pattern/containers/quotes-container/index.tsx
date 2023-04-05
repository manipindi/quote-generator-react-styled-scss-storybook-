import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { AxiosInstance } from "../../../utils/axios-istance";
import { QUOTES_DOMAIN } from "../../../utils/endpoints";
import { useAxios } from "../../../utils/hooks";
import NoDataContainer from "../../atoms/no-data-container";
import { QuoteCard } from "../../molecules/quote-card";
import ExpandModal from "../../organisms/modal/expand-modal";
import { StyledReactPaginate } from "./styles";

const QuotesContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Quotes = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [modalCardData, setModalCardData] = useState(null);

  const authorParam = searchParams.get("author");
  const pageParam: any = searchParams.get("page");

  let authorString = authorParam ? `page=${page}&author=${authorParam}` : "";
  let pageString = !authorParam ? `page=${page}` : "";

  let { data: quotesList, loading }: any = useAxios(
    `/quotes?${authorString ? authorString : pageString}`
  );

  useEffect(() => {
    if (authorParam) {
      setPage(1);
    }
  }, [authorParam]);

  useEffect(() => {
    if (authorParam) {
      setSearchParams({ page: `${page}`, author: authorParam });
    } else {
      setSearchParams({ page: `${page}` });
    }
  }, [page]);

  useEffect(() => {
    if (pageParam) {
      setPage(parseInt(pageParam));
    }
  }, [pageParam]);
  const expandHandler = (quoteData: any) => {
    setModalCardData(quoteData);
    onOpen();
  };

  const handlePageClick = (val: any) => {
    setPage(val.selected + 1);
  };

  const closeHanlder = () => {
    onClose();
  };

  console.log(page);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      {loading ? (
        <NoDataContainer label="Loading...." />
      ) : (
        <QuotesContainer>
          {!!quotesList &&
          !!quotesList?.results &&
          !!quotesList?.results.length ? (
            quotesList.results.map((eachQuote: any, idx: any) => (
              <QuoteCard
                expandHandler={expandHandler}
                key={idx}
                quoteData={eachQuote}
              />
            ))
          ) : (
            <NoDataContainer label="No Data Found" />
          )}
        </QuotesContainer>
      )}

      <ExpandModal isOpen={isOpen} closeHanlder={closeHanlder}>
        <QuoteCard quoteData={modalCardData} isModal />
      </ExpandModal>

      {!!quotesList &&
      (quotesList.totalPages === 0 || quotesList.totalPages === 1) ? null : (
        <StyledReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={parseInt(quotesList?.totalPages)}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          initialPage={page - 1}
          forcePage={page - 1}
        />
      )}
    </div>
  );
};
