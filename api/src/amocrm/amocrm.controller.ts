import {Controller, Get} from '@nestjs/common';
import {AmocrmService} from "./amocrm.service";

@Controller('amocrm')
export class AmocrmController {
    constructor(private readonly amocrmService: AmocrmService) {}

    @Get()
    data() {
        return "DAASDSADADSA"
    }

    @Get("init")
    amocrm() {
        return this.amocrmService.checkOauth2()
    }
}
