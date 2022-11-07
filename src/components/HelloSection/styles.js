import { css } from '@emotion/core';

export const styWrapper = css`
  .sub-title {
    color: #828282;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
  }
  .invitation {
      border-radius: 25px;
      border: 2px solid #f14e95;
      padding: 15px;
  }
  
  .pd-invitation {
     padding: 10px !important;
  }

  p {
    font-size: 16px;
    margin-top: 12px;
  }
  span {
    font-weight: bold !important;
    font-size: 16px !important;
    text-transform: none;
  }
  .highlight {
    font-weight: bold !important;
    font-size: 16px !important;
}

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 18px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }
`;
