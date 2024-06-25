import "./HomePageLayout.css";

import { Tab, Tabs } from "react-bootstrap";
import "./HomePageLayout.css";
import Basic from "../../components/Basic/Basic";
import Custom from "../../components/Custom/Custom";

function HomePageLayout() {
    return (
        <div className="homePageLayout_container">
            <div>
                <p>
                    <strong>Three.js</strong>
                </p>
            </div>
            <Tabs
                defaultActiveKey="Basic"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="Basic" title="Basic">
                    <Basic />
                </Tab>
                <Tab eventKey="Custom" title="Custom">
                    <Custom />
                </Tab>
            </Tabs>
        </div>
    );
}

export default HomePageLayout;
