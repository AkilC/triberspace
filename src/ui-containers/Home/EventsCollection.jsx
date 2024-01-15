import React, { useContext } from 'react';
import { GlobalContext } from "../../contexts/GlobalStore";
import EventCard from "../../ui-components/EventCard";
import { getOverrideProps } from "../../ui-components/utils";
import { Collection, Pagination, Placeholder } from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom';

export default function EventCollection(props) {
  const { overrideItems, overrides, ...rest } = props;
  const { eventsData, loading, hasMorePages, pageIndex, setPageIndex } = useContext(GlobalContext);
  const pageSize = 6; // Adjust if needed
  const isApiPagination = false; // Update based on your logic

  // Debugging
  console.log("Events Data:", eventsData);

  const handlePreviousPage = () => {
    if (pageIndex > 1) {
      setPageIndex(pageIndex - 1);
    }
  };

  const handleNextPage = () => {
    setPageIndex(pageIndex + 1);
  };

  const jumpToPage = (pageNum) => {
    setPageIndex(pageNum);
  };

  return (
    <div>
      <Collection
        type="grid"
        searchPlaceholder="Search..."
        templateColumns="1fr 1fr 1fr 1fr"
        autoFlow="row"
        alignItems="stretch"
        justifyContent="stretch"
        itemsPerPage={pageSize}
        isPaginated={!isApiPagination && isApiPagination}
        items={loading ? new Array(pageSize).fill({}) : eventsData}
        {...getOverrideProps(overrides, "EventCollection")}
        {...rest}
      >
        {(item, index) => {
          if (loading || !item) {
            return <Placeholder key={index} size="large" />;
          }
          return (
            <Link to={`events/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
              <EventCard
                height="auto"
                width="auto"
                margin="0 24px 16px 0px"
                world={item.World}
                event={item}
                {...(overrideItems && overrideItems({ item, index }))}
              ></EventCard>
            </Link>
          );
        }}
      </Collection>

      {isApiPagination && hasMorePages && (
        <Pagination
          currentPage={pageIndex}
          totalPages={Math.ceil(eventsData.length / pageSize)}
          hasMorePages={hasMorePages}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
          onChange={jumpToPage}
        />
      )}
    </div>
  );
}
