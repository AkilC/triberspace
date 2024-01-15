import React, { useContext } from 'react';
import { GlobalContext } from "../../contexts/GlobalStore";
import WorldCard from "../../ui-components/WorldCard";
import { getOverrideProps } from "../../ui-components/utils";
import { Collection, Pagination, Placeholder } from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom';

export default function WorldsCollection(props) {
  const { overrideItems, overrides, ...rest } = props;
  const { worldsData, loading, hasMorePages, pageIndex, setPageIndex } = useContext(GlobalContext);
  const pageSize = 6; // Adjust if needed
  const isApiPagination = false; // Update based on your logic

  // Debugging
  console.log("Worlds Data:", worldsData);

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
        type="list"
        searchPlaceholder="Search..."
        direction="row"
        alignItems="stretch"
        itemsPerPage={pageSize}
        isPaginated={isApiPagination}
        items={loading ? new Array(pageSize).fill({}) : worldsData}
        {...getOverrideProps(overrides, "WorldCardCollection")}
        {...rest}
      >
        {(item, index) => {
          if (loading) {
            return <Placeholder key={index} size="large" />;
          }
          return (
            <Link to={`/worlds/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                <WorldCard
                    world={item}
                    width="auto"
                    margin="0 8px 0 0"
                    key={item.id}
                    {...(overrideItems && overrideItems({ item, index }))}
                ></WorldCard>
            </Link>
          );
        }}
      </Collection>

      {isApiPagination && hasMorePages && (
        <Pagination
          currentPage={pageIndex}
          totalPages={Math.ceil(worldsData.length / pageSize)}
          hasMorePages={hasMorePages}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
          onChange={jumpToPage}
        />
      )}
    </div>
  );
}
