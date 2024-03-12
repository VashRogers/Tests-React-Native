import { HttpResponse, http } from "msw"

const handlers = [
    http.get(`shows/:showId/episodes`, () => {
        return HttpResponse.json(ctx.status(200), ctx.json([]));
    }),
];
