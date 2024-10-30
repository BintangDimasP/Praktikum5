import { Heading, Center, Text, ScrollView } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
   // Get the params
   const params = route.params.item;

   return (
       <>
           <Header title={"News"} withBack="true" />
           <ScrollView flex={1} p={"4"}>
               <Center>
                   <Heading>News Detail</Heading>
                   <Text textAlign={"center"} fontWeight="bold" mt={4} mb={2}>
                       {params.title}
                   </Text>
                   <Text textAlign={"center"}>{params.content}</Text>
               </Center>
           </ScrollView>
       </>
   );
};

export default NewsDetail;