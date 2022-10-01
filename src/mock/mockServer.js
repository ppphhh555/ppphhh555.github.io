import Mock from "mockjs";
import banner from "@/mock/banner.json"
import Floor from "@/mock/Floor.json"

Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock("/mock/Floor",{code:200,data:Floor})

