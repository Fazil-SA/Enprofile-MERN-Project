import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { Box } from '@mui/material'
import { UploadOutlined } from '@ant-design/icons'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Image} from 'cloudinary-react'
import CircularProgress from '@mui/material/CircularProgress';
import DoneIcon from '@mui/icons-material/Done';
import { axiosUserInstance } from "../../../Instance/Axios";
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { portfolioCreationData, purchasedTemplateData } from '../../../redux/authSlice'
import '../../../pages/user/loading.css'

const UpdatePortfolio = () => {

    const [selectedImages, setSelectedImages] = useState([])
    const [imageDisplayUrl, setImageDisplayUrl] = useState('')
    const [loading,setLoading] = useState('')
    const [clPublicId,setClPublicId] = useState('')

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const UpdateData = location.state
    const prodId = location.state[0]._id

    const token = useSelector((state) => state.authSlice.userToken)

    const onFinish = (values) => {
        values.coverImageUrl = imageDisplayUrl
        portfolioCreation()
        async function portfolioCreation() {
            const config = {
                datas: {
                  "data" : values,
                  "prodId" : prodId
                },
              };
        try {
            const response = await axiosUserInstance
            .post('/update-portfolio-user-data',config, {
                headers: {
                    'authorization': token,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
                })
            .then((response) => {
                if(response.data.status == 'Update Successful'){
                    navigate('/profile')  
                }
            })
            .catch((err) => {
                console.log(err)
            })
            
        } catch (error) {
            console.log(error)
            }
        }
    }


    const uploadImage = () => {
        // console.log(selectedImages)
        if(selectedImages == '') {
            toast.error("Please Choose File!", {
                theme: "colored",
                autoClose: 3000,
            })
        } else {
            setLoading('spinnerActive')
            const formData = new FormData()
            formData.append("file",selectedImages)
            formData.append("upload_preset","enp_product_images")
            Axios.post('https://api.cloudinary.com/v1_1/dk4uips8d/image/upload/',formData)
    
            .then((response) => {
                setClPublicId(response.data.public_id)
                setLoading('doneUpload')
                setImageDisplayUrl(response.data.url)
            })
        }
    }


    async function removeImage() {
        const response = await axiosAdminInstance
        .post('/admin/imageRemoveCl',{clPublicId})
        .then((response) => {
            if(response.data.status == 'img removed'){
                setImageDisplayUrl('')
            }
        })
        .catch((err) => {
            console.log(err)
        })

    }




  return (
    
    
      <Box component="main" sx={{ flexGrow: 1, p: 10,ml:{md:20,lg:40},mr:{md:20} , justifyContent:'center',justifyItems:'center' }}>

    <Form onFinish={onFinish} style={{maxWidth: 500}}>
        <Form.Item name={'logoTitle'} initialValue={UpdateData ? UpdateData[0].logoTitle : ''} rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder='Your Name' />
        </Form.Item>
        <Form.Item name={'jobTitle'} initialValue={UpdateData ? UpdateData[0].jobTitle : ''} rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder="I'm a Full Stack Developer" />
        </Form.Item>
        <Form.Item name={'caption'} initialValue={UpdateData ? UpdateData[0].caption : ''} rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder='A highly motivated and skilled Full stack developer with experience in building fullstack web applications. Proficient in modern JavaScript, including React and Node.js, as well as MongoDB and Express.js. Strong problem - solving skills along with passion for continuous learning and staying up-to-date with the latest technologies.' />
        </Form.Item>
        <Form.Item style={{display:'flex' ,justifyContent:'center', alignContent:'center'}} name={'coverImageUrl'} >
                        <input
                            type="file"
                            name="file"
                            id="image"
                            onChange={(e) => setSelectedImages(e.target.files[0])}
                            className="input p-1 ml-6 text-white"
                        />
                        
                        <Image style={{width:75}} cloudName="dk4uips8d" publicId={imageDisplayUrl} />
                        {
                     imageDisplayUrl ? 
                     <>
                    <Button type='dashed' block icon={<UploadOutlined />} onClick={removeImage} >Remove Cover Photo</Button>

                     </>
                    : 
                    <>
                    <Button type='dashed' className='text-white' block icon={<UploadOutlined />} onClick={uploadImage} >Upload Cover Photo</Button>
                    <ToastContainer />
                    </>
                    }
                    {
                     loading==='spinnerActive' ?  <CircularProgress sx={{  justifyContent:'center',justifyItems:'center'}}/> : ''
                    }
                    {
                     loading==='doneUpload' && imageDisplayUrl ?  <DoneIcon sx={{ fontSize: 70 , justifyContent:'center',justifyItems:'center'}} /> : ''
                    }
        </Form.Item>
        <Form.Item name={'firstPara'} initialValue={UpdateData ? UpdateData[0].firstPara : ''} rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder='Explain About Yourself for display in About Me Session First Para' />
        </Form.Item>
        <Form.Item name={'secondPara'} initialValue={UpdateData ? UpdateData[0].secondPara : ''}  rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder='Explain About Yourself for display in About Me Session Second Para' />
        </Form.Item>
        <Form.Item name={'linkedin'} initialValue={UpdateData ? UpdateData[0].linkedin : ''} rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder='LinkedIn Link' />
        </Form.Item>
        <Form.Item name={'github'} initialValue={UpdateData ? UpdateData[0].github : ''} rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder='Github Link' />
        </Form.Item>
        <Form.Item name={'email'} initialValue={UpdateData ? UpdateData[0].email : ''} rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder='Gmail' />
        </Form.Item>
        <Form.Item name={'contact'} initialValue={UpdateData ? UpdateData[0].contact : ''} rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder='Contact Number' />
        </Form.Item>
        <Form.Item name={'portfolioUrl'} initialValue={UpdateData ? UpdateData[0].portfolioUrl : ''} rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder='Redirect URL without "/"' />
        </Form.Item>
        <ToastContainer />
        <Form.Item>
        <Button className='text-white bg-gray-600' htmlType="submit" type="primary" block>
          Submit
        </Button>


      </Form.Item>
    </Form>

    </Box>
  )
}

export default UpdatePortfolio


