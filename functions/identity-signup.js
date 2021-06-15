const faunadb = require('faunadb');
q = faunadb.query;
const client = new faunadb.Client({ secret: process.env.FAUNA_SECRET_KEY });

exports.handler = async function(event, context) {
    const user = event.body.payload.user;

    await client.query(
        q.Create(
            q.Collection('users'),
            {
                data: {
                    id: user.id,
                    username: user.user_metadata.full_name,
                },
            },
        )
    );

    return {
        statusCode: 200,
    };
}