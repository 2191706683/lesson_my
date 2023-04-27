<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

let containerRef = ref(null);
let controls;
let wheels = [];
let carBody, frontCar, hoodCar, glassCar;

const renderer = new THREE.WebGLRenderer({
  antialias: true, // 优化
});
renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);

const camera = new THREE.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(3, 2, 2);

const scene = new THREE.Scene();

const render = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};

const wheelsMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x424449,
  metalness: 1,
  roughness: 0.5,
});
const bodyMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x424449,
  metalness: 1,
  roughness: 0.5,
  clearcoat: 1,
  clearcoatRoughness: 0,
  //   map :carTexture
});
const frontMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x424449,
  metalness: 1,
  roughness: 0.5,
  clearcoat: 1,
  clearcoatRoughness: 0,
});
const hoodMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x424449,
  metalness: 1,
  roughness: 0.5,
  clearcoat: 1,
  clearcoatRoughness: 0,
});
const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0,
  roughness: 0,
  transmission: 1,
  transparent: true,
});

onMounted(() => {
  containerRef.value.appendChild(renderer.domElement);
  renderer.setClearColor("#000");
  scene.background = new THREE.Color("#fff");
  scene.environment = new THREE.Color("#fff");
  render();

  controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  const gridHelper = new THREE.GridHelper(10, 10); // 网格地面
  gridHelper.material.opacity = 0.2; // 透明度
  gridHelper.material.transparent = true;
  scene.add(gridHelper);

  // 添加汽车模型 gltf 专属  静态资源
  const loader = new GLTFLoader(); // gltf 特定模型文件 chatgpt 生成
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("../public/roadSter/draco/gltf/");
  loader.setDRACOLoader(dracoLoader);
  // DRACOLoader google 模型压缩器    gbl 模型文件
  loader.load("../public/roadSter/model/bmw01.glb", (gltf) => {
    const bmw = gltf.scene; // 各个部分
    bmw.traverse((child) => {
      if (child.isMesh && child.name.includes("轮毂")) {
        child.material = wheelsMaterial;
        wheels.push(child);
      }
      // 车身
      if (child.isMesh && child.name.includes("Mesh002")) {
        carBody = child;
        carBody.material = bodyMaterial;
      }
      // 前脸
      if (child.isMesh && child.name.includes("前脸")) {
        frontCar = child;
        frontCar.material = frontMaterial;
      }
      // 引擎盖
      if (child.isMesh && child.name.includes("引擎盖_1")) {
        hoodCar = child;
        hoodCar.material = hoodMaterial;
      }
      // 挡风玻璃
      if (child.isMesh && child.name.includes("挡风玻璃")) {
        glassCar = child;
        glassCar.material = glassMaterial;
      }
    });
    scene.add(bmw);
  });

  const light1 = new THREE.DirectionalLight(0xffffff, 1);
  light1.position.set(0, 0, 10);
  scene.add(light1);

  const light2 = new THREE.DirectionalLight(0xffffff, 1);
  light1.position.set(0, 0, -10);
  scene.add(light2);

  const light3 = new THREE.DirectionalLight(0xffffff, 1);
  light3.position.set(10, 0, 0);
  scene.add(light3);

  const light4 = new THREE.DirectionalLight(0xffffff, 1);
  light4.position.set(-10, 0, 0);
  scene.add(light4);

  const light5 = new THREE.DirectionalLight(0xffffff, 1);
  light4.position.set(0, 10, 0);
  scene.add(light5);

  const light6 = new THREE.DirectionalLight(0xffffff, 1);
  light6.position.set(5, 10, 0);
  scene.add(light6);

  const light7 = new THREE.DirectionalLight(0xffffff, 1);
  light7.position.set(0, 10, 5);
  scene.add(light7);
  const light8 = new THREE.DirectionalLight(0xffffff, 1);
  light8.position.set(0, 10, -5);
  scene.add(light8);
  const light9 = new THREE.DirectionalLight(0xffffff, 1);
  light9.position.set(-5, 10, 0);
  scene.add(light9);
});

let colors = [
  {
    name: "冷光银",
    color: "#424449",
  },
  {
    name: "经典黑",
    color: "black",
  },
  {
    name: "深海蓝",
    color: "#000f4a",
  },
  {
    name: "中国红",
    color: "#bd050f",
  },
  {
    name: "珍珠白",
    color: "white",
  },
];

const selectColor = (color) => {
  bodyMaterial.color.set(color);
};
</script>

<template>
  <div class="home">
    <div class="container" ref="containerRef"></div>
    <div class="content">
      <div class="words">选择车身颜色</div>
      <div class="select">
        <div
          class="select-item"
          v-for="(item, index) in colors"
          :key="index"
          @click="selectColor(item.color)"
        >
          <div class="select-item-color" :style="{ background: item.color }"></div>
          <div class="select-item-color-name">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.home {
  display: flex;
  .content-box {
    position: relative;
    // border: 1px solid #e8eaed;
  }
  .content {
    margin: 10px auto;

    .words {
      font-size: 20px;
      margin: 20px;
    }
  }
  .select {
    display: flex;
  }
  .select-item {
    margin: 5px;
    cursor: pointer;
  }
  .select-item-color {
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 50px;
    margin-bottom: 10px;
  }
  .select-item-color-name {
    font-size: 14px;
  }
}
</style>
