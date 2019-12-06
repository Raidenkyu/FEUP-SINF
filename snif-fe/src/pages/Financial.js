import React from "react";
import { Container, Row, Col } from "reactstrap";

import Layout from "../components/common/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import Indicator from "../components/common/utils/Indicator";
import { Graph, colors } from "../components/common/utils/Graph";

const Financial = () => {

    const grossNetProfit = {
        type: "line",
        labels: ["December 2018", "January 2019", "February 2019", "March 2019", "April 2019",
            "May 2019", "June 2019", "July 2019", "August 2019", "September 2019", "October 2019", "November 2019"],
        datasets: {
            "Net": {
                backgroundColor: colors.lightGreen.background,
                borderColor: colors.lightGreen.border,
                values: [50, 150, 130, 170, 220, 250, 270, 300, 340, 360, 350, 400],
            },
            "Gross": {
                backgroundColor: colors.middleGreen.background,
                borderColor: colors.middleGreen.border,
                values: [0, 50, 50, 150, 190, 200, 230, 270, 300, 340, 350, 380],
            }
        },
    };

    const returnSales = {
        type: "line",
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
            "Saturday", "Sunday"],
        datasets: {
            "Equity": {
                backgroundColor: colors.lightGreen.background,
                borderColor: colors.lightGreen.border,
                values: [500, 150, 120, 210, 370, 380, 476],
            },
            "Assets": {
                backgroundColor: colors.middleGreen.background,
                borderColor: colors.middleGreen.border,
                values: [420, 100, 170, 150, 340, 450, 480],
            },
            "Sales": {
                backgroundColor: colors.darkGreen.background,
                borderColor: colors.darkGreen.border,
                values: [220, 70, 146, 120, 314, 430, 510],
            }
        },
    };


    return (
        <Layout navbar sidebar>
            <Container>
                <Row className="mb-5">
                    <Col xs="6">
                        <ContentCard header="Gross and Net profit margin">
                            <Graph data={grossNetProfit} />
                        </ContentCard>
                    </Col>
                    <Col xs="6">
                        <Row className="flex-grow-1">
                            <Col xs="12">
                                <ContentCard header="Return on sales, assets and equity">
                                    <Graph data={returnSales} />
                                </ContentCard>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col lg="3" xs="12">
                        <ContentCard header="Cash Ratio">
                            <Indicator value="2024" />
                        </ContentCard>
                    </Col>
                    <Col lg="3" xs="12">
                        <ContentCard header="Debt to Equity">
                            <Indicator value="15 days" />
                        </ContentCard>
                    </Col>
                    <Col lg="3" xs="12">
                        <ContentCard header="Average collection period">
                            <Indicator value="40 days" />
                        </ContentCard>
                    </Col>
                    <Col lg="3" xs="12">
                        <ContentCard header="Average payment period">
                            <Indicator value="50 days" />
                        </ContentCard>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col lg="3" xs="12">
                        <ContentCard header="Acid Ratio">
                            <Indicator value="4096" />
                        </ContentCard>
                    </Col>
                    <Col lg="3" xs="12">
                        <ContentCard header="EBIT">
                            <Indicator value="20.000€" />
                        </ContentCard>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Financial;
