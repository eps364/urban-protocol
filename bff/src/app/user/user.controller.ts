import { UseGuards, Controller, Get, Post, Put, Delete, Req, Res, Next, Body, Param } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport';
import { UserModel } from "@common/models";

@Controller('user')
export class UserController {

    @Post()
    async create(@Req() requestAnimationFrame, @Res() res, @Next() next, @Body() userDTO): Promise<UserModel> {
        try {
            return res.send({
                id: 1,
                name: 'Ana',
                dob: '27/03/1993',
                departamentId: 1
            })
        } catch (e) {
            next(e)
        }
    }

    @Get()
    async findAll(@Res() res, @Next() next): Promise<UserModel[]> {
        try {

            let users: UserModel[] = [{
                id: 1,
                name: 'Ana',
                dob: '27/03/1993',
                departamentId: '1',
                password: 'teste123'
            }]
            return res.json(users)
        } catch (e) {
            next(e)
        }
    }

    @Get(':id')
    async show(@Req() req, @Res() res, @Next() next, @Param('id') userId): Promise<UserModel> {
        try {
            return res.send({
                id: 1,
                name: 'Ana',
                dob: '27/03/1993',
                departamentId: 1
            })
        } catch (e) {
            next(e)
        }
    }

    @Put(':id')
    async update(@Req() req, @Res() res, @Next() next, @Param('id') userId, @Body() userDTO): Promise<UserModel> {
        try {
            return res.send({
                id: 1,
                name: 'Ana',
                dob: '27/03/1993',
                departamentId: 1
            })
        } catch (e) {
            next(e)
        }
    }

    @Delete(':id')
    async destroy(@Req() req, @Res() res, @Next() next, @Param('id') userId): Promise<boolean> {
        try {
            return res.send(true)
        } catch (e) {
            next(e)
        }
    }
}