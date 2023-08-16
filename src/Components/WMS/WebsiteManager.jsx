import * as React from "react";
import Grid from "@mui/material/Grid";

export default function WebsiteManagerComponent(){
    return (
        <div className="websitemanager">
            <h1>Manage website</h1>
            <ol>
                <li>Banners section updation</li>
                <li>Info Update - (About Us)</li>
                <li>Services - CRU</li>
                <li>Partners - CRUD</li>
                <li>Total Projects Completed</li>
                <li>OnGoing Projects</li>
                <li>FAQs - CRU</li>
                <li>Contact Us Details</li>
                <li>Quicklinks - CRUD</li>
                <li>Social Media - CRU</li>
            </ol>

            <Grid contatainer>
                <Grid xs={12}>
                     
                </Grid>
            </Grid>
        </div>
    )
};