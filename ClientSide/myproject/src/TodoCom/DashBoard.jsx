import react from "react";
import { Stack } from "@mui/material";

function DashBoard() {
  return (
    <div>
      <div className="dis">
        <Stack direction="row" spacing={0}>
          <h1>
            Welcome To Empires Task Management <br /> System. We Help Your
            Manage you Activities just to save your time.
          </h1>
        </Stack>
      </div>
      <div className="userupdates">
        <div className="divone">
          <Stack direction={"column"} spacing={10}>
            <h1>Overall Participation</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero amet
              deleniti nam ipsam necessitatibus rerum, quis hic eum, aliquid
              debitis est dolores at molestiae eveniet officiis perspiciatis
              maiores accusamus laudantium.
            </p>
          </Stack>
        </div>
        <div className="divsix">
          <Stack direction={"column"} spacing={10}>
            <h1>completed Todos 40%</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero amet
              deleniti nam ipsam necessitatibus rerum, quis hic eum, aliquid
              debitis est dolores at molestiae eveniet officiis perspiciatis
              maiores accusamus laudantium.
            </p>
          </Stack>
        </div>
        <div className="divsix">
          <Stack direction={"column"} spacing={10}>
            <h1>Pending Todos 60%</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero amet
              deleniti nam ipsam necessitatibus rerum, quis hic eum, aliquid
              debitis est dolores at molestiae eveniet officiis perspiciatis
              maiores accusamus laudantium.
            </p>
          </Stack>
        </div>
      </div>
    </div>
  );
}
export default DashBoard;
