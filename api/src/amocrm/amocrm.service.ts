import { Injectable } from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import { Client } from "amocrm-js"

@Injectable()
export class AmocrmService {
    private readonly amocrm = "https://www.amocrm.ru"
    constructor(private readonly httpService: HttpService) {
        const crm = new Client({
            domain: "servity.ru",
            auth: {
                client_id: process.env.AMO_ID,
                code: process.env.AMO_AUTH,
                client_secret: process.env.AMO_SECRET,
                redirect_uri: process.env.AMO_REDIRECT
            }
        })

        const test = async () => {
            try {
                const data = await crm.request.get("/api/v4/leads")

                console.log(data)
            } catch (e) {
                console.log(e)
            }
        }

        test()
    }

    async checkOauth2() {

    }
}
