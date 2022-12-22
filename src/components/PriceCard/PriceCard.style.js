import styled from "styled-components";

const DEBUG = true;

export const PCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 380px;
    height: 600px;
    ${DEBUG ? "background-color: lightgreen;" : ""}
`;

export const CardHeader = styled.div`
    background-image: url("https://2.bp.blogspot.com/-E9_QZh1-08U/UOc0R0skSoI/AAAAAAAAB9A/ppu2Q2giHGs/s1600/Facebook-Timeline-Profile-Covers-New-York-NYC14.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    height: 100px;
    ${DEBUG ? "background-color: purple;" : ""}
`;

export const CardBodyWrapper = styled.div`
    width: 100%;
    height: 100%;
`;