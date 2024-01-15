import React, { createContext, useState, useEffect, useCallback } from 'react';
import { listEvents, getEvent, listWorlds } from '../graphql/queries'; // adjust the import path
import { generateClient } from 'aws-amplify/api';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [eventsData, setEventsData] = useState([]);
  const [worldsData, setWorldsData] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(true);
  const [loading, setLoading] = useState(true);
  const pageSize = 6;

  // Inside GlobalProvider
  const [eventDetails, setEventDetails] = useState(null);
  const [eventLoading, setEventLoading] = useState(false);

  const [navigationRequest, setNavigationRequest] = useState(null);

  const client = generateClient();

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      try {
        const result = await client.graphql({
          query: listEvents.replaceAll("__typename", ""),
          variables: { limit: pageSize },
        });
        console.log(result);
        if (result.data && result.data.listEvents) {
          setEventsData(result.data.listEvents.items);
          setHasMorePages(!!result.data.listEvents.nextToken);
        } else {
          console.error("No data received from the query");
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
      setLoading(false);
    };
  
    loadEvents();
  }, [pageIndex]);

  useEffect(() => {
    const loadWorlds = async () => {
      setLoading(true);
      try {
        const result = await client.graphql({
          query: listWorlds.replaceAll("__typename", ""),
          variables: { limit: pageSize },
        });
        console.log(result);
        if (result.data && result.data.listWorlds) {
          setWorldsData(result.data.listWorlds.items);
          setHasMorePages(!!result.data.listWorlds.nextToken);
        } else {
          console.error("No data received from the query");
        }
      } catch (error) {
        console.error("Error fetching Worlds:", error);
      }
      setLoading(false);
    };
  
    loadWorlds();
  }, [pageIndex]);

  /* // Function to load an individual event
  const loadEventDetails = useCallback(async (eventId) => {
    setEventLoading(true);
    try {
      const result = await client.graphql({
        query: getEvent,
        variables: { id: eventId },
      });
      console.log(result);
      if (result.data && result.data.getEvent) {
        setEventDetails(result.data.getEvent);
      } else {
        console.error("No data received for the event");
      }
    } catch (error) {
      console.error("Error fetching event details:", error);
    }
    setEventLoading(false);
  },[]); */

  return (
    <GlobalContext.Provider value={{
        eventsData, setEventsData, worldsData, setWorldsData, pageIndex, setPageIndex,
        hasMorePages, loading, eventDetails, setEventDetails,
        eventLoading
      }}>
        {children}
    </GlobalContext.Provider>
  );
};
