import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="4cd116fc63ca40809810ca0842dc78edfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <group name="Object078" position={[76.075, 163.937, 118.597]} rotation={[-Math.PI / 3, 0, 0]} scale={3.099}>
                    <group name="Object_53" position={[-97.409, -7.128, -96.27]}>
                      <mesh name="Object078_Plastic_Soft_0" geometry={nodes.Object078_Plastic_Soft_0.geometry} material={materials.Plastic_Soft} />
                    </group>
                  </group>
                  <group name="body" position={[41.054, -198.364, 208.679]} rotation={[-Math.PI / 2, 0, 0.947]}>
                    <group name="leaf" position={[-0.015, 1.307, 8.04]}>
                      <group name="Object_59" position={[0.015, -1.561, -6.223]}>
                        <mesh name="leaf_normal_0" geometry={nodes.leaf_normal_0.geometry} material={materials.normal} />
                      </group>
                    </group>
                    <group name="hand2" position={[2.127, -0.734, 5.063]} rotation={[0, Math.PI / 3, 0]}>
                      <group name="Object_62" position={[-2.127, 0.48, -3.246]}>
                        <mesh name="hand2_normal_0" geometry={nodes.hand2_normal_0.geometry} material={materials.normal} />
                      </group>
                    </group>
                    <group name="hand1" position={[-2.169, -0.734, 5.084]} rotation={[0, -Math.PI / 3, 0]}>
                      <group name="Object_65" position={[2.169, 0.48, -3.267]}>
                        <mesh name="hand1_normal_0" geometry={nodes.hand1_normal_0.geometry} material={materials.normal} />
                      </group>
                    </group>
                    <group name="foot2" position={[2.428, -0.923, 2.02]}>
                      <group name="Object_68" position={[-2.428, 0.669, -0.203]}>
                        <mesh name="foot2_normal_0" geometry={nodes.foot2_normal_0.geometry} material={materials.normal} />
                      </group>
                    </group>
                    <group name="foot1" position={[-2.491, -0.923, 1.978]}>
                      <group name="Object_71" position={[2.491, 0.669, -0.161]}>
                        <mesh name="foot1_normal_0" geometry={nodes.foot1_normal_0.geometry} material={materials.normal} />
                      </group>
                    </group>
                    <group name="Object_56" position={[0, -0.254, 1.817]}>
                      <mesh name="body_normal_0" geometry={nodes.body_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="Object608" position={[-54.38, 114.483, -87.573]} rotation={[-Math.PI / 2, 0, 0]} scale={3.099}>
                    <group name="Object_75" position={[-55.32, -73.646, -80.314]}>
                      <mesh name="Object608_metalmat_0" geometry={nodes.Object608_metalmat_0.geometry} material={materials.metalmat} />
                      <mesh name="Object608_paintmat_0" geometry={nodes.Object608_paintmat_0.geometry} material={materials.paintmat} />
                    </group>
                  </group>
                  <group name="wire7" position={[53.443, -91.07, 179.833]} rotation={[-1.534, 0, 0]}>
                    <group name="Object_91" position={[-138.488, 205.266, 96.473]}>
                      <mesh name="wire7_normal_0" geometry={nodes.wire7_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="Object675" position={[85.462, -196.519, -246.386]} rotation={[-Math.PI / 2, 0, 3.113]}>
                    <group name="Object680" position={[-12.887, 0, 8.351]}>
                      <group name="Object_103" position={[12.887, 0, 68.079]}>
                        <mesh name="Object680_metalmat_0" geometry={nodes.Object680_metalmat_0.geometry} material={materials.metalmat} />
                      </group>
                    </group>
                    <group name="Object681" position={[14.29, 0, 8.351]}>
                      <group name="Object_106" position={[12.887, 0, 68.079]}>
                        <mesh name="Object681_metalmat_0" geometry={nodes.Object681_metalmat_0.geometry} material={materials.metalmat} />
                      </group>
                    </group>
                    <group name="Object_97" position={[0, 0, 76.43]}>
                      <mesh name="Object675_metalmat_0" geometry={nodes.Object675_metalmat_0.geometry} material={materials.metalmat} />
                      <mesh name="Object675_paintmat_0" geometry={nodes.Object675_paintmat_0.geometry} material={materials.paintmat} />
                      <mesh name="Object675_glassmat_0" geometry={nodes.Object675_glassmat_0.geometry} material={materials.glassmat} />
                      <mesh name="Object675_outline_0" geometry={nodes.Object675_outline_0.geometry} material={materials.outline} />
                    </group>
                  </group>
                  <group name="Object532" position={[-29.258, -38.731, -7.815]} rotation={[-Math.PI / 2, 0, -0.698]} scale={3.099}>
                    <group name="Object_109" position={[-17.707, -77.448, -30.882]} rotation={[0, 0, 0.698]}>
                      <mesh name="Object532_normal_0" geometry={nodes.Object532_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="Object689" position={[-245.525, -161.782, -259.308]} rotation={[-1.627, -0.067, -0.7]}>
                    <group name="Object_115" rotation={[0, 0, 0.698]}>
                      <mesh name="Object689_metalmat_0" geometry={nodes.Object689_metalmat_0.geometry} material={materials.metalmat} />
                    </group>
                  </group>
                  <group name="Plane001" position={[-101.44, 184.595, -141.828]} rotation={[-Math.PI / 2, 0, -0.14]}>
                    <group name="Object_118" position={[-0.965, -3.606, -2.09]}>
                      <mesh name="Plane001_normal_0" geometry={nodes.Plane001_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="Plane003" position={[-95.311, 184.595, -140.965]} rotation={[Math.PI / 2, 0, 0.14]} scale={-1}>
                    <group name="Object_121" position={[-0.965, -3.606, -2.09]}>
                      <mesh name="Plane003_normal_0" geometry={nodes.Plane003_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="Plane104" position={[-83.171, 184.595, -140.38]} rotation={[-Math.PI / 2, 0, 0.3]}>
                    <group name="Object_125" position={[-0.965, -3.606, -2.09]}>
                      <mesh name="Plane104_normal_0" geometry={nodes.Plane104_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="Plane103" position={[-77.258, 184.595, -142.209]} rotation={[Math.PI / 2, 0, -0.3]} scale={-1}>
                    <group name="Object_128" position={[-0.965, -3.606, -2.09]}>
                      <mesh name="Plane103_normal_0" geometry={nodes.Plane103_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="Plane105" position={[133.481, 48.269, -68.276]} rotation={[-Math.PI / 2, 0, -1.892]}>
                    <group name="Object_132" position={[-0.965, -3.606, -2.09]}>
                      <mesh name="Plane105_normal_0" geometry={nodes.Plane105_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="Plane106" position={[131.529, 48.269, -62.403]} rotation={[Math.PI / 2, 0, 1.892]} scale={-1}>
                    <group name="Object_136" position={[-0.965, -3.606, -2.09]}>
                      <mesh name="Plane106_normal_0" geometry={nodes.Plane106_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="Plane108" position={[148.082, 111.708, 190.16]} rotation={[-Math.PI / 2, 0, 2.969]}>
                    <group name="Object_139" position={[-0.965, -3.606, -2.09]}>
                      <mesh name="Plane108_normal_0" geometry={nodes.Plane108_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="Plane107" position={[141.985, 111.708, 189.096]} rotation={[Math.PI / 2, 0, -2.969]} scale={-1}>
                    <group name="Object_143" position={[-0.965, -3.606, -2.09]}>
                      <mesh name="Plane107_normal_0" geometry={nodes.Plane107_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="Plane109" position={[172.103, 108.396, 188.554]} rotation={[-Math.PI / 2, 0, 2.068]}>
                    <group name="Object_147" position={[-0.965, -3.606, -2.09]}>
                      <mesh name="Plane109_normal_0" geometry={nodes.Plane109_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="Plane110" position={[169.153, 108.396, 183.113]} rotation={[Math.PI / 2, 0, -2.068]} scale={-1}>
                    <group name="Object_150" position={[-0.965, -3.606, -2.09]}>
                      <mesh name="Plane110_normal_0" geometry={nodes.Plane110_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="Plane111" position={[38.825, 198.597, 68.564]} rotation={[1.571, 0, -0.135]} scale={-1}>
                    <group name="Object_153" position={[-0.965, -3.606, -2.09]}>
                      <mesh name="Plane111_normal_0" geometry={nodes.Plane111_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="Plane112" position={[32.692, 198.597, 69.394]} rotation={[-Math.PI / 2, 0, 0.135]}>
                    <group name="Object_156" position={[-0.965, -3.606, -2.09]}>
                      <mesh name="Plane112_normal_0" geometry={nodes.Plane112_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="Object704" position={[-134.881, -36.701, -123.583]} rotation={[-1.576, 0.01, -0.018]}>
                    <group name="Object_160" position={[49.835, -98.15, 42.104]}>
                      <mesh name="Object704_Plastic_Soft_0" geometry={nodes.Object704_Plastic_Soft_0.geometry} material={materials.Plastic_Soft} />
                      <mesh name="Object704_metalmat_0" geometry={nodes.Object704_metalmat_0.geometry} material={materials.metalmat} />
                    </group>
                  </group>
                  <group name="wire1" position={[11.349, -53.562, -65.672]} rotation={[-1.748, -0.095, 0.141]}>
                    <group name="Object_164" position={[-101.137, -36.732, 53.01]} rotation={[0.189, 0, -0.143]}>
                      <mesh name="wire1_Plastic_Soft_0" geometry={nodes.wire1_Plastic_Soft_0.geometry} material={materials.Plastic_Soft} />
                    </group>
                  </group>
                  <group name="wire2" position={[51.826, -43.974, -45.541]} rotation={[-1.607, -0.035, -0.803]}>
                    <group name="Object081" position={[3.654, -65.195, -24.493]} rotation={[0.043, 0.012, -2.868]} scale={3.099}>
                      <group name="Object_170" position={[-91.861, 2.868, -19.124]} rotation={[0, 0, -0.519]}>
                        <mesh name="Object081_normal_0" geometry={nodes.Object081_normal_0.geometry} material={materials.normal} />
                      </group>
                    </group>
                    <group name="Object332" position={[3.799, -102.162, -21.43]} rotation={[0.051, -0.078, -2.349]} scale={3.099}>
                      <group name="Object_173" position={[-78.668, -54.735, -19.124]}>
                        <mesh name="Object332_normal_0" geometry={nodes.Object332_normal_0.geometry} material={materials.normal} />
                      </group>
                    </group>
                    <group name="Object682" position={[0.542, -22.699, -18.803]} rotation={[0.076, -0.03, -1.641]} scale={3.099}>
                      <group name="Object_176" position={[-78.668, -54.735, -19.124]}>
                        <mesh name="Object682_normal_0" geometry={nodes.Object682_normal_0.geometry} material={materials.normal} />
                      </group>
                    </group>
                    <group name="Object_167" position={[-80.707, -112.36, 49.377]} rotation={[0, 0, 0.802]}>
                      <mesh name="wire2_Plastic_Soft_0" geometry={nodes.wire2_Plastic_Soft_0.geometry} material={materials.Plastic_Soft} />
                    </group>
                  </group>
                  <group name="wire3" position={[-3.768, -84.443, -56.369]} rotation={[-Math.PI / 2, 0, 0.069]}>
                    <group name="Object_179" position={[-83.209, -25.286, 89.846]} rotation={[0, 0, -0.069]}>
                      <mesh name="wire3_normal_0" geometry={nodes.wire3_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="wire4" position={[50.921, -99.013, -52.273]} rotation={[-1.559, 0.072, -0.166]}>
                    <group name="Object_182" position={[-129.692, -48.861, 104.416]} rotation={[0, 0, 0.165]}>
                      <mesh name="wire4_normal_0" geometry={nodes.wire4_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="wire5" position={[77.672, -109.814, -59.703]} rotation={[-1.557, -0.049, 0.285]}>
                    <group name="Object_185" position={[-165.796, 12.777, 115.217]} rotation={[0, 0, -0.284]}>
                      <mesh name="wire5_normal_0" geometry={nodes.wire5_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="Object706" position={[26.374, -164.473, 185.106]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Object_202" position={[-111.42, 210.54, 169.876]}>
                      <mesh name="Object706_Material_#5518_0" geometry={nodes['Object706_Material_#5518_0'].geometry} material={materials.Material_5518} />
                    </group>
                  </group>
                  <group name="Object707" position={[26.374, -163.141, 185.106]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Object_205" position={[-111.42, 210.54, 168.544]}>
                      <mesh name="Object707_Material_#5518_0" geometry={nodes['Object707_Material_#5518_0'].geometry} material={materials.Material_5518} />
                    </group>
                  </group>
                  <group name="Object708" position={[-121.509, 153.741, 54.209]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Object_208" position={[-111.42, 210.54, 169.876]}>
                      <mesh name="Object708_Material_#5518_0" geometry={nodes['Object708_Material_#5518_0'].geometry} material={materials.Material_5518} />
                    </group>
                  </group>
                  <group name="Object709" position={[-121.509, 155.073, 54.209]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Object_211" position={[-111.42, 210.54, 168.544]}>
                      <mesh name="Object709_Material_#5518_0" geometry={nodes['Object709_Material_#5518_0'].geometry} material={materials.Material_5518} />
                    </group>
                  </group>
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" position={[70.302, -179.983, 221.365]} rotation={[-Math.PI / 2, 0, -3.054]} scale={0.316} />
                  <group name="Object_9" position={[-91.873, 4.902, -24.341]} rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_11" position={[-111.329, 4.902, -24.341]} rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_13" position={[-111.329, 4.902, -24.341]} rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_15" position={[-91.873, 4.902, -24.341]} rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_17" position={[-91.873, 4.902, -24.341]} rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_19" position={[-111.329, 4.902, -24.341]} rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object224" position={[50.128, -163.157, 190.258]} rotation={[-Math.PI / 2, 0, -3.054]} scale={0.316} />
                  <group name="Object649" position={[-85.046, 5.403, -25.433]} rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh name="Object649_normal_0" geometry={nodes.Object649_normal_0.geometry} material={materials.normal} />
                    <mesh name="Object649_paintmat_0" geometry={nodes.Object649_paintmat_0.geometry} material={materials.paintmat} />
                    <mesh name="Object649_metalmat_0" geometry={nodes.Object649_metalmat_0.geometry} material={materials.metalmat} />
                    <mesh name="Object649_Plastic_Soft_0" geometry={nodes.Object649_Plastic_Soft_0.geometry} material={materials.Plastic_Soft} />
                    <mesh name="Object649_alpha_glass_0" geometry={nodes.Object649_alpha_glass_0.geometry} material={materials.alpha_glass} />
                    <mesh name="Object649_glassmat_0" geometry={nodes.Object649_glassmat_0.geometry} material={materials.glassmat} />
                    <mesh name="Object649_Material_#5511_0" geometry={nodes['Object649_Material_#5511_0'].geometry} material={materials.Material_5511} />
                    <mesh name="Object649_Material_#5512_0" geometry={nodes['Object649_Material_#5512_0'].geometry} material={materials.Material_5512} />
                    <mesh name="Object649_glass_transp_0" geometry={nodes.Object649_glass_transp_0.geometry} material={materials.glass_transp} />
                    <mesh name="Object649_interiors_0" geometry={nodes.Object649_interiors_0.geometry} material={materials.interiors} />
                    <mesh name="Object649_alpha_0" geometry={nodes.Object649_alpha_0.geometry} material={materials.alpha} />
                  </group>
                  <group name="Object674" position={[-85.046, 5.403, -25.433]} rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh name="Object674_outline_0" geometry={nodes.Object674_outline_0.geometry} material={materials.outline} />
                    <mesh name="Object674_outline_0_1" geometry={nodes.Object674_outline_0_1.geometry} material={materials.outline} />
                  </group>
                  <group name="Object531" position={[-29.696, -38.731, -8.183]} rotation={[-Math.PI / 2, 0, 0]} scale={3.099}>
                    <group name="Object_112" position={[-63.347, -47.947, -30.882]}>
                      <mesh name="Object531_normal_0" geometry={nodes.Object531_normal_0.geometry} material={materials.normal} />
                    </group>
                  </group>
                  <group name="Object688" position={[170.335, 105.085, 196.562]} rotation={[-Math.PI / 2, 0, 1.892]} />
                  <group name="Object687" position={[126.551, 7.103, -162.455]} rotation={[-Math.PI / 2, 0, -2.015]} />
                  <group name="Object697" position={[112.712, -129.223, 159.702]} rotation={[-Math.PI / 2, 0, 2.516]} />
                  <group name="Object698" position={[75.751, 32.198, -225.247]} rotation={[-Math.PI / 2, 0, -1.722]} />
                  <group name="Object699" position={[452.97, 28.886, -125.943]} rotation={[-Math.PI / 2, 0, -2.624]} />
                  <group name="Object700" position={[246.558, 21.104, -12.254]} rotation={[-Math.PI / 2, 0, -1.741]} />
                  <group name="Object705" position={[-85.046, 5.403, -25.433]} rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh name="Object705_Material_#5516_0" geometry={nodes['Object705_Material_#5516_0'].geometry} material={materials.Material_5516} />
                  </group>
                  <group name="treezzzzz" position={[-173.389, -142.472, 79.929]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Object619" position={[80.208, -105.995, -2.985]} rotation={[-0.32, 0.86, -1.371]} scale={0.792}>
                      <group name="Object_191" position={[0.668, 3.969, 17.987]}>
                        <mesh name="Object619_alpha_0" geometry={nodes.Object619_alpha_0.geometry} material={materials.alpha_0} />
                      </group>
                    </group>
                    <group name="Object620" position={[-62.026, -105.946, -1.428]} rotation={[-0.32, 0.86, -1.371]} scale={0.792}>
                      <group name="Object_194" position={[0.668, 3.969, 17.987]}>
                        <mesh name="Object620_alpha_0" geometry={nodes.Object620_alpha_0.geometry} material={materials.alpha_0} />
                      </group>
                    </group>
                    <group name="Object621" position={[-81.053, 105.386, -0.664]} rotation={[-0.32, 0.86, -1.371]} scale={0.792}>
                      <group name="Object_197" position={[0.668, 3.969, 17.987]}>
                        <mesh name="Object621_alpha_0" geometry={nodes.Object621_alpha_0.geometry} material={materials.alpha_0} />
                      </group>
                    </group>
                  </group>
                  <group name="Object622" position={[-85.046, 5.403, -25.433]} rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh name="Object622_alpha_0" geometry={nodes.Object622_alpha_0.geometry} material={materials.alpha_0} />
                  </group>
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.normal} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.metalmat} skeleton={nodes.Object_8.skeleton} />
                  <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.normal} skeleton={nodes.Object_10.skeleton} />
                  <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.normal} skeleton={nodes.Object_12.skeleton} />
                  <skinnedMesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.normal} skeleton={nodes.Object_14.skeleton} />
                  <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.normal} skeleton={nodes.Object_16.skeleton} />
                  <skinnedMesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.normal} skeleton={nodes.Object_18.skeleton} />
                  <skinnedMesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.normal} skeleton={nodes.Object_20.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
