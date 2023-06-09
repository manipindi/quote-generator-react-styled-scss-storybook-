import { Image, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useAxios } from "../../../utils/hooks";
import { QuoteCard } from "../../molecules/quote-card";
import ExpandModal from "../../organisms/modal/expand-modal";
import { StyledReactPaginate } from "./styles";
import "./quote-container.scss";
import LoadingOverlay from "../../atoms/no-data-container";
import NoDataImg from '../../../assets/no-data.png'

const QuotesContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;

  @media screen and (min-width: 0px) and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Quotes = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const authorParam = searchParams.get("author");
  const pageParam: any = searchParams.get("page");
  const [page, setPage] = useState(pageParam ? pageParam : 1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [modalCardData, setModalCardData] = useState(null);

  let authorString = authorParam ? `page=${page}&author=${authorParam}` : "";
  let pageString = !authorParam ? `page=${page}` : "";

  let { data: quotesList, loading }: any = useAxios(
    `/quotes?${authorString ? authorString : pageString}`
  );

  useEffect(() => {
    if (authorParam) {
      // console.log(authorParam, "authorParam");
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

  // console.log(page);

  const [showPageAlert, setShowPageAlert] = useState(false);

  useEffect(() => {
    if (quotesList && quotesList.page && quotesList.totalPages) {
      setShowPageAlert(true);
      setTimeout(() => {
        setShowPageAlert(false);
      }, 1500);
    }
  }, [quotesList]);

  return (
    <div>
        {!!quotesList && !!quotesList.totalPages && !!quotesList.page && (
          <Text
            className={`${showPageAlert ? "show-alert" : "close-alert"} alert`}>
            Page {quotesList.page} of {quotesList.totalPages}
          </Text>
        )}
      
      {loading ? (
        <LoadingOverlay/>
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
            <div className="no-data-container">
              <Image src={NoDataImg} width="300px"/>
              <Text>No Data Found</Text>
            </div>
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
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={parseInt(quotesList?.totalPages)}
          previousLabel="<"
          renderOnZeroPageCount={null}
          initialPage={page - 1}
          forcePage={page - 1}
        />
      )}
    </div>
  );
};
