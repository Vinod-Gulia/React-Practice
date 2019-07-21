import React, {Fragment} from 'react'
import {Card, CardContent , Typography } from '@material-ui/core';

function QATeam() {
    const team = [
        {
        'Name':'Vinod',
        'Role': 'AM',
        'Exp': 13
        },
        {
            'Name':'Paavan',
            'Role': 'TL',
            'Exp': 8
        },
        {
            'Name':'Sharan',
            'Role': 'PL',
            'Exp': 13
        }
    ]
    const obj = team.map(member => 
        <Fragment>
            <Card>
                <CardContent>
                    <Typography>Name --> {member.Name}</Typography>
                    <Typography>Role --> {member.Role}</Typography>
                    <Typography>Total experience --> {member.Exp}</Typography>                  
                </CardContent>
            </Card>
        </Fragment>
    )
    return (
        <Fragment>
            {obj}
        </Fragment>
    )
}

export default QATeam
