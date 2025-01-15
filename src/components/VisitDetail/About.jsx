import React from "react";
import {
  Box,
  Button,
  H2,
  Paper,
  ShowMore,
  Text,
} from "../../styles/DetailPage/About";

export default function About({ theme }) {
  return (
    <>
      <Box>
        <H2>About Serengeti West (Grumeti)</H2>
        <Text>
          The Western Corridor of the Serengeti National Park, extending to the
          Grumeti River, is renowned for its dramatic annual wildebeest
          migration crossings, typically around May and June. This remote region
          offers a wilder, less frequented safari experience, with dense
          bushland, vast savannas, and riverine forests providing habitat for a
          diverse array ...
        </Text>
        <ShowMore>
          Show more
          <Paper>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-down"
              className="svg-inline--fa fa-chevron-down text-sm ml-1.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              ></path>
            </svg>
          </Paper>
        </ShowMore>
        <Button>
          View Gallery
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="images"
            class="svg-inline--fa fa-images "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320l-144 0-48 0-80 0c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224z"
            ></path>
          </svg>
        </Button>
      </Box>
    </>
  );
}