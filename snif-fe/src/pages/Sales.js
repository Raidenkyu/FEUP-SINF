import React from "react";
import { Container, Row, Col } from "reactstrap";

import Layout from "../components/common/Layout";
import ContentCard from "../components/common/utils/ContentCard";
import { Graph, colors } from "../components/common/utils/Graph";
import Indicator from "../components/common/utils/Indicator";
import ContentTable from "../components/common/utils/ContentTable";

const Sales = () => {

    const monthlySales = {
        type: "line",
        labels: ["December 2018", "January 2019", "February 2019", "March 2019", "April 2019",
            "May 2019", "June 2019", "July 2019", "August 2019", "September 2019", "October 2019"],
        datasets: {
            "sales": {
                backgroundColor: colors.lightGreen.background,
                borderColor: colors.lightGreen.border,
                values: [40000, 50000, 45000, 40000, 30000, 25000, 20000, 17000, 20000, 25000, 35000],
            },
        },
    };

    const cumulativeSales = {
        type: "line",
        labels: [2008, 2010, 2012, 2014, 2016, 2018],
        datasets: {
            "sales": {
                backgroundColor: colors.lightGreen.background,
                borderColor: colors.lightGreen.border,
                values: [0, 100000, 1000000, 2000000, 2500000, 4200000],
            },
        },
    };

    const topSellingHeaders = [
        { index: "name", value: "Name" },
        { index: "units", value: "Units" },
        { index: "revenue", value: "Revenue" },
    ];

    const topSellingRows = [
        { name: "Mint Smell", units: "61.344", revenue: "345000" },
        { name: "Mint Smell", units: "61.344", revenue: "345000" },
        { name: "Mint Smell", units: "61.344", revenue: "345000" },
        { name: "Mint Smell", units: "61.344", revenue: "345000" },
        { name: "Mint Smell", units: "61.344", revenue: "345000" },
        { name: "Mint Smell", units: "61.344", revenue: "345000" },
        { name: "Mint Smell", units: "61.344", revenue: "345000" },
        { name: "Mint Smell", units: "61.344", revenue: "345000" },
    ];

    const salesHeaders = [
        { index: "saleId", value: "Sale id" },
        { index: "product", value: "Product" },
        { index: "quantity", value: "Quantity" },
        { index: "value", value: "Value" },
        { index: "date", value: "Date" },
    ];

    const salesRows = [
        { saleId: "4FN2SNB3", product: "Mint Smell", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { saleId: "4FN2SNB3", product: "Mint Smell", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { saleId: "4FN2SNB3", product: "Mint Smell", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { saleId: "4FN2SNB3", product: "Mint Smell", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { saleId: "4FN2SNB3", product: "Mint Smell", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { saleId: "4FN2SNB3", product: "Mint Smell", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { saleId: "4FN2SNB3", product: "Mint Smell", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { saleId: "4FN2SNB3", product: "Mint Smell", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { saleId: "4FN2SNB3", product: "Mint Smell", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { saleId: "4FN2SNB3", product: "Mint Smell", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { saleId: "4FN2SNB3", product: "Mint Smell", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { saleId: "4FN2SNB3", product: "Mint Smell", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { saleId: "4FN2SNB3", product: "Mint Smell", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { saleId: "4FN2SNB3", product: "Mint Smell", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { saleId: "4FN2SNB3", product: "Mint Smell", quantity: "30.000", value: "1.500", date: "27/10/2019" },
        { saleId: "4FN2SNB3", product: "Mint Smell", quantity: "30.000", value: "1.500", date: "27/10/2019" },
    ];

    return (
        <Layout navbar sidebar>
            <Container>
                <Row className="mb-5">
                    <Col xs="12">
                        <ContentCard header="Monthly Sales">
                            <Graph data={monthlySales} />
                        </ContentCard>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs="6">
                        <Row className="mb-5">
                            <Col xs="6">
                                <ContentCard header="Growth">
                                    <Indicator value={0.9} />
                                </ContentCard>
                            </Col>
                            <Col xs="6">
                                <ContentCard header="Average Profit Margin">
                                    <Indicator value={2.3} />
                                </ContentCard>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                                <ContentCard header="Cumulative Sales">
                                    <Graph data={cumulativeSales} />
                                </ContentCard>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="6">
                        <ContentCard header="Top Selling Products">
                            <ContentTable headers={topSellingHeaders} rows={topSellingRows} />
                        </ContentCard>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <ContentCard header="Sales">
                            <ContentTable headers={salesHeaders} rows={salesRows} />
                        </ContentCard>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Sales;
