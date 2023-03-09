import {
  Center,
  Flex,
  Show,
  Spacer,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import * as tfTask from "@tensorflow-models/tasks";
import React from "react";
import Context from "../context";
import Interactions from "../interaction";
import MobileNav from "../mobilenav";

export default function Main() {
  const [isReady, setReady] = React.useState(false);
  const [context, setContext] = React.useState("");
  const [interactions, setInteractions] = React.useState([]);
  const [showContext, setShowContext] = React.useState(true);
  const model = React.useRef();
  const toast = useToast();

  const predict = async (question) => {
    if (question === "" || context === "") {
      toast({
        title: "Context needs to be set and then a question needs to be asked",
        status: "error",
        isClosable: true,
      });
      return;
    }

    console.log(question, context);

    let resp = "";

    if (model === undefined) {
      toast({
        title: "model didn't get initialized, reload the page and try again",
        status: "error",
        isClosable: true,
      });
    }

    resp = await model.current.predict(question, context);

    console.log(resp);

    setInteractions((interactions) => [
      ...interactions,
      {
        resp:
          resp.answers[0] === undefined
            ? "no answer found in the given context, please try a different question or try to rephrase the question"
            : resp.answers[0].text,
        query: question,
      },
    ]);
  };

  React.useEffect(() => {
    const loadModel = async () => {
      model.current = await tfTask.QuestionAndAnswer.BertQA.TFJS.load({
        backend: "wasm",
      });
    };
    loadModel().then(() => {
      setReady(true);
    });
  }, [isReady]);

  return (
    <Flex
      direction="column"
      grow="1"
      w="100%"
      h="100%"
      align="center"
      justify="center"
    >
      {isReady ? (
        <>
          <Show above="md">
            <Flex
              maxW="1200px"
              direction="row"
              align="flex-start"
              justify="center"
              wrap="wrap"
              w="100%"
              minW="320px"
            >
              <Context inputContext={context} setContext={setContext} />
              <Interactions interactions={interactions} setQuestion={predict} />
            </Flex>
          </Show>
          <Show below="md">
            <Flex
              maxW="500px"
              direction="column"
              align="flex-start"
              justify="center"
              w="100%"
              h="100%"
              minW="320px"
            >
              {showContext ? (
                <Context inputContext={context} setContext={setContext} />
              ) : (
                <></>
              )}
              {!showContext ? (
                <Interactions
                  interactions={interactions}
                  setQuestion={predict}
                  isMobile={true}
                />
              ) : (
                <></>
              )}
              <Spacer />
              <MobileNav menu={showContext} setMenu={setShowContext} />
            </Flex>
          </Show>
        </>
      ) : (
        <Center width="100%" h="450px">
          <Spinner
            thickness="4px"
            speed=".8s"
            emptyColor="gray.200"
            color="#6096B4"
            size="md"
          />
          <Text size="md" mx="5" color="gray.800">
            Loading the Language model over network, please hold on ...
          </Text>
        </Center>
      )}
    </Flex>
  );
}
