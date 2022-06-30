import React, { useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  Card,
  Container,
  Fade,
  AppBar,
  Typography,
  Grow,
  Grid,
  Modal,
  TextField,
  Toolbar,
  IconButton,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { getPosts, register, login } from "./actions/actions";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useSelector } from "react-redux";
import * as api from "./api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const App = () => {
  const dispatch = useDispatch();
  const [loggedOut, setLoggedOut] = useState(true);
  const [regData, setRegData] = useState({
    name: "",
    pass: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const user = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleClose = () => setOpenModal(false);

  async function handleRegister() {
    //dispatch(register(regData));
    try {
      const { data } = await api.register(regData);

      dispatch({ type: "REGISTER", payload: data });
    } catch (error) {
      setModalText(`${error.message}`);
      setOpenModal(true);
      console.log(error.message);
      return;
    }

    setModalText(`Successfully registered ${regData.name}`);
    setOpenModal(true);
    setRegData({ name: "", pass: "" });
  }

  async function handleLogin(e) {
    e.preventDefault();
    console.log("Logging in ", regData);
    //dispatch(login(regData));
    try {
      const { data } = await api.login(regData);
      if (data.status === "ok") {
        dispatch({ type: "LOGIN", payload: data });
        console.log("Ok USER: ", user);
        setRegData({ name: "", pass: "" });
        setLoggedOut(false);
      } else {
        console.log("Failed to login: ", data);
        setModalText(`Failed to login: ${data.error}`);
        setOpenModal(true);
        return;
      }
    } catch (error) {
      setModalText(`${error.message}`);
      setOpenModal(true);
      console.log(error.message);
      return;
    }
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Register
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {`${modalText}`}
            </Typography>
          </Box>
        </Fade>
      </Modal>
      {loggedOut ? (
        <Container
          maxwidth="sm"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleLogin}>
            <Card sx={{ maxWidth: 185 }}>
              <TextField
                id="standard-basic"
                label="Username"
                variant="standard"
                value={regData.name}
                onChange={(e) =>
                  setRegData({ ...regData, name: e.target.value })
                }
              />
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                value={regData.pass}
                onChange={(e) =>
                  setRegData({ ...regData, pass: e.target.value })
                }
              />
              <Button variant="outlined" type="submit">
                Log In
              </Button>
              <Button variant="outlined" onClick={handleRegister}>
                Register
              </Button>
            </Card>
          </form>
        </Container>
      ) : (
        <Container maxwidth="lg">
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography variant="h6" color="inherit" component="div">
                Photos
              </Typography>
            </Toolbar>
          </AppBar>
          <Grow in>
            <Container>
              <Grid
                container
                justify="space-between"
                alignItems="stretch"
                spacing="3"
              >
                <Grid item mr={3} mt={3} xs={12} sm={4}>
                  <Form />
                </Grid>
                <Grid item mt={3} xs={12} sm={7}>
                  <Posts />
                </Grid>
              </Grid>
            </Container>
          </Grow>
          <Button variant="outlined" onClick={() => setLoggedOut(true)}>
            Log Out
          </Button>
        </Container>
      )}
    </div>
  );
};

export default App;
