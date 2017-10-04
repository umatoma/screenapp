import React from 'react';

const cursorImageUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABwFJREFUeNrUWltsU3UY/5/T03u73tuVghsTWYYJiBEHAmMjiBGNEH0Rb4nxQSBq4ov6pNEYYzQmxsTEByNqTEwg8cEbUR92cxpAJDPMiMyN3TfWy7retl7O8fedrqPd2g3GKSv/5lvb03PO//t93++7nYyTJIndykugP11dXWW5d29v77uJRMLj9XpfwPew0hscPHgwC2B8bIyp1Rql76/r6+t7JBqJ1GYymdeUBlBlMl/1AK2hwQFWW1Or5B6SmlfFBZUqoeJ5RS2TSafnPxfceXB4iHF4V1g4Je+3MGYXmWYAICp1iUUSTlHfViIIsUS2LEnOSgIhLpHqhaUuJBC7m5qWvPlgX39ZlZdEKUv+lQC4lmV1OphOp2PjwyPXfE1TczObmppCdHPzQWk2mxed19Xesey9FMtverOJudd4mSiK85JbqVRqXrZs3ap8JVa0wNhtzGq1stGh4TTcT1lUuq2mJlOzvpaFgiHFKcaXibpag8FwRzAU9IZCIbPFaiWz68rWCym4dkA2TU5OPh+PRn3T4WlXPBFHlR/6HO3EAM/zn+H3AORnpVoLpQCsgbw9Pj7+mCAIVSaTiem1OmY0GWUfO5wOt16vd0cikW0QBjmFc17ENf+tNgA1pH5iYuIDvO/3eDyMlNdqtUxEv6JHdkpn0szhcDC32y3HRiwWY4FA4MFgMPgVjn+E674uK4DOjg7W3NKy6PjMzAzJ3eD4j7Cu3eVyyakQNJFlNpNhEr2QJem7RqNhKpVKTrk4n0Bs9/v92wCC2uAvVsMDHij/JilfXV09n8cpfRY0XHNFKHecQNC5oBrVAVU4HH7VYrG045TLNzMLcaDAh3h/gCxvNBpl5UioOHFc8dKZO4eEPEG0ApAGgPgYPzvKBqCjtY1hk3xpicfjD+WUL6VwVmtZ84Jzcv6hWKH4QIE7gMr8eI5+JNdSha/LA91/npe5SzIzk9gFTpvhekxy6gLL5mQhhgL35TaHokSn7D1nGldC6ZVQyJpMpg6ZsDEpn6NMMZnjjbwJj+8FAhh0hhqxQIZIp1KH0smkE8I629rLA6Cro5MF/H4nLFxvhNUoEGWLlgCQ8wS3UHkSPgtCxauYyWAgoJp0On2gHXRdSRaipwZ30bi5DFj+1/aOO6PxmM5mtckcpoFRKhICAuixefMWVlVVxc6cPsMS8XjJWIHibNLv1xr0unfsdkczDs3mMY2sIBbRm9rf12UA/X19T/b29m7PWXQhX8nZUjYXMn8gwBKJhMxbtaCWlZfjlMvPNiIzaPXsicOHmW+tj/3W1cUGBgZBueIUpxRLBU5Qqz12u/1pnV6XnQNyvy+IIjEjoro7/fMA1q277YhKEHzI0RlWIuAoNuF24T6ns3ky4H/J7XJpzaaqosMGWVpMpVl3dze70NPDtu/cyfbs3SsXtmKLiuLoyCiz2W1nDTr9WwMDl5MAw101yCLAvNliDuZTqHtOll31DQ1nHX7/UbvDoXW7XeAzv2gHQSWAMjHW1trKorDsrj1NzOfzyVQptkJTIWYwGmfX+nzvX7r47/dlq8Qt+/bJBkP6+ycyPX0P9TYa0G7R40l4IAM3U9WlVIlOVFY+HwBdk/stPBWmz1/i8MmbkUYjOq32RByWTcL1y0y0pUv5XJZKIm1ShwoAk+MTE8xstZQHQFPzHpbCZiToOFux+QgaMnlMXLISl1BejhMEL83G8Mw0BqA2CCO5d8eOsvdCfwDEe7Q5CSlyvSBkV8LyZARktFP4+kvZeqF9++9HztcUiMfjPo6Nv0FLLIMoiAP5c7aVzs9S+QWOeioMQBQnp9BTHaM5Il/oyUW5Z+KI0+k8CoW+I0XGxsbY7Ozs1VSZq8h5zzSluaJFoEdHR8lzP9lstiM4HFytieyK1+t9BjPwG5Bno9GoxWQ2MUuVhXFkfinrhXQ6w9C9skg0ypC95KKFZvAHdKLPAdDEas/EU5CX4Y3fQYtjwUCwITIdcdNIGYayNNQPjwyzGOoCAn4S515EB3ocFfckMlCkkp5KnEDfcxLtyCZY9dFoePop5PgN6YxIlW4I8fIpZodvAeIC6JSu1McqRPMeEu8a7yfwymldLLrW46l+GMf+uhWeC8krhvQIicLiYVGSnP19/TLPN9ZvrPwnc1coG6FCQ1BcOXqJsWhEBWHnz52rTA/MRGOyyBbh+PxyQC+O51Xz1eDvCz3y+87du24OgNvX17H+SzfyAC03MSyY7jo7l39qhpGVWpUVU2gDlF/tRSBWBKASlM8tjUZ9fRQi2ijxDwhSntywJwAilUwtD6BOIeWZQoovB6IAQF2dsrRBCuJQBzgl/6FEUAssOZtcDKC+vl5p6kroRnUQPQJRKldgywCcLmc5Yi/R2Nj4CrpQIyRQrgD/X4ABALnLPwvJwKpQAAAAAElFTkSuQmCC';

const Cursor = ({ x, y }) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 24,
      height: 24,
      marginTop: -12,
      marginLeft: -12,
      backgroundImage: `url(${cursorImageUrl})`,
      backgroundSize: '24px 24px',
    }}
  >
    <div
      style={{
        position: 'absolute',
        left: 18,
        top: 14,
        fontSize: 10,
        lineHeight: 1,
        color: '#ddd',
        textShadow: '1px 1px 3px #000'
      }}
    >
      {x}/{y}
    </div>
  </div>
);

export default Cursor;
