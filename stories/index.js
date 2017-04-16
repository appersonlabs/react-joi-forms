import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import { JoiForm, JoiInput, JoiFormContext, themes } from "../src/index";
import Welcome from "./Welcome";
import Joi from "joi-browser";

storiesOf("Welcome", module).add("to Storybook", () => (
    <Welcome showApp={linkTo("JoiForm")} />
));

storiesOf("Form", module).add("basic html5", () => (
    <JoiFormContext components={themes.html5}>
        <JoiForm
            ref="form"
            schema={{
                name: Joi.string().label("First Name").required().min(2),
                password: Joi.string().label("Password").required().min(2),
                surName: Joi.string()
                    .label("Last Name")
                    .valid(["Apperson", "Moseman"]),
                bio: Joi.string().label("Bio").required(),
                enabled: Joi.boolean().label("Enabled").required(),
                disabled: Joi.boolean()
                    .label("Disabled")
                    .required()
                    .default(false),
                startDate: Joi.date()
                    .label("Start Date")
                    .required()
                    .meta({ type: "date" }),
                endTime: Joi.date()
                    .label("End Time")
                    .meta({ type: "time" })
                    .required(),
                file: Joi.object()
                    .label("File Upload")
                    .meta({ component: "file" })
            }}
            values={{
                name: "matt"
            }}
            onChange={(e, formValues) => {}}
            onSubmit={(e, formValues) => {}}>
            <JoiInput name="name" />
        </JoiForm>
    </JoiFormContext>
));