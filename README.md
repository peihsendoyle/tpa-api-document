# Getting Started with TPA Backend

## Getting Started

### Installation

The following section explains how to use the TPA BackendLib library in a new project.

### Initialize the API Client

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `accessToken` | `string` | The OAuth 2.0 Access Token to use for API requests. |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.Production
  accessToken: 'AccessToken',
})
```

### Authorization

This API uses `OAuth 2 Bearer token`.

## Client Class Documentation

### TPA Backend Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

### Controllers

| Name | Description |
|  --- | --- |
| admin | Gets AdminController |
| users | Gets UsersController |
| project | Gets ProjectController |
| utils | Gets UtilsController |
| order | Gets OrderController |

## API Reference

### List of APIs

* [Admin](#admin)
* [Users](#users)
* [Project](#project)
* [Utils](#utils)
* [Order](#order)

### Admin

#### Login Admin

```ts
async loginAdmin(
  body: LoginAdminRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`LoginAdminRequest`](#login-admin-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const body: LoginAdminRequest = {
  username: 'adminkardia',
  password: 'adminkardia',
};

try {
  const { result, ...httpResponse } = await adminController.loginAdmin(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Register Admin

:information_source: **Note** This endpoint does not require authentication.

```ts
async registerAdmin(
  body: RegisterAdminRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RegisterAdminRequest`](#register-admin-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const body: RegisterAdminRequest = {
  firstName: '',
  lastName: '',
  username: 'adminkardiatest01',
  password: 'adminkardiatest01',
  email: 'adminkardiatest01@gmail.com',
  isVerified: false,
};

try {
  const { result, ...httpResponse } = await adminController.registerAdmin(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Get Users

```ts
async getUsers(
  page: number,
  limit: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number` | Query, Required | - |
| `limit` | `number` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const page = 2;
const limit = 5;
try {
  const { result, ...httpResponse } = await adminController.getUsers(page, limit);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Delete User

```ts
async deleteUser(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
try {
  const { result, ...httpResponse } = await adminController.deleteUser();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Verify User

```ts
async verifyUser(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
try {
  const { result, ...httpResponse } = await adminController.verifyUser();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Get Info Admin

```ts
async getInfoAdmin(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
try {
  const { result, ...httpResponse } = await adminController.getInfoAdmin();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Change Role User

```ts
async changeRoleUser(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
try {
  const { result, ...httpResponse } = await adminController.changeRoleUser();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Get User Info by Admin

```ts
async getUserInfoByAdmin(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
try {
  const { result, ...httpResponse } = await adminController.getUserInfoByAdmin();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

### Users

#### Login

```ts
async login(
  body: LoginRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`LoginRequest`](#login-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const body: LoginRequest = {
  username: 'trongdang001',
  password: 'trongdang001',
};

try {
  const { result, ...httpResponse } = await usersController.login(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Register

```ts
async register(
  body: RegisterRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RegisterRequest`](#register-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const body: RegisterRequest = {
  firstName: '',
  lastName: '',
  username: 'dangtrongtest010',
  password: 'dangtrongtest010',
  email: 'dangtrongtest010@gmail.com',
  isVerified: false,
};

try {
  const { result, ...httpResponse } = await usersController.register(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Reset Password

```ts
async resetPassword(
  body: ResetPasswordRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ResetPasswordRequest`](#reset-password-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const body: ResetPasswordRequest = {
  email: 'dtrong97vn@gmail.com',
};

try {
  const { result, ...httpResponse } = await usersController.resetPassword(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Request Password Confirm

```ts
async requestPasswordConfirm(
  body: RequestPasswordConfirmRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RequestPasswordConfirmRequest`](#request-password-confirm-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const body: RequestPasswordConfirmRequest = {
  username: 'ductrong97',
  token: '460795',
  password: 'kardiachain@123',
};

try {
  const { result, ...httpResponse } = await usersController.requestPasswordConfirm(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Get Info User

```ts
async getInfoUser(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
try {
  const { result, ...httpResponse } = await usersController.getInfoUser();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Change Password

```ts
async changePassword(
  body: ChangePasswordRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ChangePasswordRequest`](#change-password-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const body: ChangePasswordRequest = {
  password: 'kardiachain@123',
  newPassword: '123@kardiachain',
};

try {
  const { result, ...httpResponse } = await usersController.changePassword(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Find User With Condition

```ts
async findUserWithCondition(
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  status: string,
  role: number,
  page: number,
  limit: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Query, Required | - |
| `lastName` | `string` | Query, Required | - |
| `email` | `string` | Query, Required | - |
| `phone` | `string` | Query, Required | - |
| `status` | `string` | Query, Required | - |
| `role` | `number` | Query, Required | - |
| `page` | `number` | Query, Required | - |
| `limit` | `number` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const firstName = 'trong';
const lastName = 'dang';
const email = 'trongdang@kardiachain.io';
const phone = '0981870191';
const status = 'active';
const role = 0;
const page = 0;
const limit = 100;
try {
  const { result, ...httpResponse } = await usersController.findUserWithCondition(firstName, lastName, email, phone, status, role, page, limit);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Update User Info

```ts
async updateUserInfo(
  body: UpdateUserInfoRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateUserInfoRequest`](#update-user-info-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const body: UpdateUserInfoRequest = {
  firstName: 'Trong',
  lastName: 'Dang',
  sex: 'male',
  phone: '0981870191',
  birthday: 1620895114,
  avatar: 'http://s3.',
};

try {
  const { result, ...httpResponse } = await usersController.updateUserInfo(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

### Project

#### Add Project

```ts
async addProject(
  body: AddProjectRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AddProjectRequest`](#add-project-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const bodyImages: Image[] = [];

const bodyimages0: Image = {
  imageName: '',
  imageUrl: '',
  uploadedBy: '',
  order: 1,
};

bodyImages[0] = bodyimages0;

const bodyFeatureImage: FeatureImage = {
  imageName: '',
  imageUrl: '',
  uploadedBy: '',
  order: 1,
};

const bodyLocationProvince: Province = {
  key: 'can_tho',
  value: 'Cần Thơ',
};

const bodyLocation: Location = {
  departmentNumber: 'Mã căn 05-08, tầng 2, block D2',
  street: 'Đường Nguyễn Đức Cảnh',
  ward: 'Phường Châu Phú',
  district: 'Quận 9',
  province: bodyLocationProvince,
  countryCode: 'VN',
};

const bodyTypeOfRealEstate: TypeOfRealEstate = {
  key: 'can_ho_chung_cu',
  value: 'Căn hộ chung cư',
};

const bodyProgressionOfProject: ProgressionOfProject[] = [];

const bodyprogressionOfProject0: ProgressionOfProject = {
  key: 'sap_mo_goi_von',
  value: 'sắp mở gọi vốn',
  date: 1622263635,
  order: 1,
  isActive: true,
};

bodyProgressionOfProject[0] = bodyprogressionOfProject0;

const bodyStateOfProject: StateOfProject = {
  key: 'dang mo ban',
  value: 'dang_mo_ban',
};

const bodyTypeOfFundraise: TypeOfFundraise = {
  key: 'cam_ket',
  value: 'cam kết',
};

const bodyDetailInfoExtraProperties: ExtraProperty[] = [];

const bodyDetailInfoextraProperties0: ExtraProperty = {
  key: 'số ban công',
  value: '5',
  isDisplayOnGeneralInfo: true,
};

bodyDetailInfoExtraProperties[0] = bodyDetailInfoextraProperties0;

const bodyDetailInfo: DetailInfo = {
  richtext: 'string',
  realEstateStatus: 'Đang xây dựng',
  realEstateLegalStatus: 'Chưa có sổ hồng',
  block: 'string',
  floor: 'string',
  totalArea: 'string',
  usableArea: 'string',
  numberOfBedRoom: 1,
  numberOfBathRoom: 1,
  balconyDirection: 'string',
  viewSight: 'view sông',
  doorDirection: 'string',
  apartmentId: 'string',
  extraProperties: bodyDetailInfoExtraProperties,
};

const body: AddProjectRequest = {
  status: 'draft',
  images: bodyImages,
  featureImage: bodyFeatureImage,
  title: 'căn hộ ven biển dự án Mimo',
  name: 'chung cu An Phu quan 2, test admin 01',
  shortDescription: 'string',
  location: bodyLocation,
  typeOfRealEstate: bodyTypeOfRealEstate,
  progressionOfProject: bodyProgressionOfProject,
  stateOfProject: bodyStateOfProject,
  typeOfFundraise: bodyTypeOfFundraise,
  fundraiseExpiration: 0,
  projectRatingByTpa: 'AAA',
  generalInfo: 'string',
  detailInfo: bodyDetailInfo,
  fundraiseProposal: 'richtext',
  forecastProfit: 6000,
  forecastProfitRatio: 0.1,
  price: 5000,
  totalSupply: 100,
  unitPrice: 50,
};

try {
  const { result, ...httpResponse } = await projectController.addProject(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Get Projects

```ts
async getProjects(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
try {
  const { result, ...httpResponse } = await projectController.getProjects();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Get Project by ID

```ts
async getProjectByID(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
try {
  const { result, ...httpResponse } = await projectController.getProjectByID();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Delete Project

```ts
async deleteProject(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
try {
  const { result, ...httpResponse } = await projectController.deleteProject();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Update Project

```ts
async updateProject(
  body: UpdateProjectRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateProjectRequest`](#update-project-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const bodyImages: Image[] = [];

const bodyimages0: Image = {
  imageName: '9999',
  imageUrl: '9999',
  uploadedBy: '9999',
  order: 9999,
};

bodyImages[0] = bodyimages0;

const bodyFeatureImage: FeatureImage = {
  imageName: '9999',
  imageUrl: '9999',
  uploadedBy: '9999',
  order: 9999,
};

const bodyLocation: Location1 = {
  departmentNumber: 'Mã căn 05-08, tầng 2, block D2 9999',
  street: 'Đường Nguyễn Đức Cảnh 9999',
  ward: 'Phường Châu Phú 9999',
  district: 'Quận 9 9999',
  province: 'Cần Thơ 9999',
  countryCode: 'VN 9999',
};

const bodyTypeOfRealEstate: TypeOfRealEstate = {
  key: 'can_ho_chung_cu 9999',
  value: 'Căn hộ chung cư 9999',
};

const bodyStateOfProject: StateOfProject = {
  key: 'dang mo ban',
  value: 'dang_mo_ban',
};

const bodyProgressionOfProject: ProgressionOfProject[] = [];

const bodyprogressionOfProject0: ProgressionOfProject = {
  key: 'sap_mo_goi_von',
  value: 'sắp mở gọi vốn',
  date: 1622263635,
  order: 1,
  isActive: true,
};

bodyProgressionOfProject[0] = bodyprogressionOfProject0;

const bodyTypeOfFundraise: TypeOfFundraise = {
  key: 'cam_ket 9999',
  value: 'cam kết 9999',
};

const bodyDetailInfoExtraProperties: ExtraProperty[] = [];

const bodyDetailInfoextraProperties0: ExtraProperty = {
  key: 'số ban công 9999',
  value: '5 9999',
  isDisplayOnGeneralInfo: false,
};

bodyDetailInfoExtraProperties[0] = bodyDetailInfoextraProperties0;

const bodyDetailInfo: DetailInfo = {
  richtext: 'string 9999',
  realEstateStatus: 'Đang xây dựng 9999',
  realEstateLegalStatus: 'Chưa có sổ hồng 9999',
  block: 'string 9999',
  floor: 'string 9999',
  totalArea: 'string 9999',
  usableArea: 'string 9999',
  numberOfBedRoom: 9999,
  numberOfBathRoom: 9999,
  balconyDirection: 'string 9999',
  viewSight: 'view sông 9999',
  doorDirection: 'string 9999',
  apartmentId: 'string 9999',
  extraProperties: bodyDetailInfoExtraProperties,
};

const body: UpdateProjectRequest = {
  status: 'status 9999',
  images: bodyImages,
  featureImage: bodyFeatureImage,
  title: 'căn hộ ven biển dự án Mimo 9999',
  name: 'chung cu An Phu quan 2, test admin 01 9999',
  shortDescription: 'string 9999',
  location: bodyLocation,
  typeOfRealEstate: bodyTypeOfRealEstate,
  stateOfProject: bodyStateOfProject,
  progressionOfProject: bodyProgressionOfProject,
  typeOfFundraise: bodyTypeOfFundraise,
  fundraiseExpiration: 9999,
  projectRatingByTpa: 'AAA 9999',
  generalInfo: 'string 9999',
  detailInfo: bodyDetailInfo,
  fundraiseProposal: 'richtext 9999',
  forecastProfit: 6000,
  forecastProfitRatio: 0.1,
  price: 5000,
  totalSupply: 100,
  unitPrice: 50,
  finalRevenue: 0,
  projectCode: 'HT_6E3F611C41',
  smcAddress: '0x1A002ACE2E192C796f5f19f02d61B8558Aa62BD6',
};

try {
  const { result, ...httpResponse } = await projectController.updateProject(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Filter Project by Condition

```ts
async filterProjectByCondition(
  province: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `province` | `string` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const province = 'can_tho';
try {
  const { result, ...httpResponse } = await projectController.filterProjectByCondition(province);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Verify Project

```ts
async verifyProject(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
try {
  const { result, ...httpResponse } = await projectController.verifyProject();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

### Utils

#### Upload Image

```ts
async uploadImage(
  body: UploadImageRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UploadImageRequest`](#upload-image-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const body: UploadImageRequest = {
  rawString: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUxpcaNxKdfBid7Jk9u3ZvLhrL2UQ9m5ff//zHBSRfDv3Obi6JdsKfHdsa2ANr2dVLqVTq97Lc2gP/Plutq+hs2wZcumXfTmuL+RPMadSv7++L2oeOLPmsOYVtW6c9e+jMihYZ2EVfrtwtW4ce7cn9W/iN/IlNzEkdjBjcadWM+scsy/nd66eMumZeverrShdtq/dtm/eOfOks26h/jnr/LnueTKh+LHkezWmu/bidjBiO7htdm6fZNpJti9h+PNjO3etPDepu7escazgeLFh9WucsCpfMSVTeHTl7WGP6+cb//nr//os//lq/3jn/7kpua6WtiiQ/nWdfzhlui+X//ptuCuTv7ko9mkRfHMaseSOua2Vvrad92sSvDIZ/vafdqmR//quPzinO3EZNafQfjVcvXQbvrYevXPavvdiMOMNK2JP7x/K7V7K+OyUtKgRPDDYfzfj/vcgvrdjP7hipliHcKGM/TLaP7ceciaQv7hg8+pVOWfQPrgksSUP+vBYfjTcNSlSdqsUMGaSo1YF9a1X8ijVc6bR7B1J7aQRc6aQMyWP//po6h6MeGbO/rXd8yLMcSDK/7efqBnH8yVOf/jk/LQb9ywVeDDfM2iSZFaGJReHNqpSv/nneG7YN2zUbqNOdSwWu/SjduWOJtnIfXSc/WvUryIMtWtUOG4VrKCNbaJPt+0V7WBLv/vuuLAZ//us+qkQ/WsSuysV76DL9SUP9WrTOSiS+jEaP7vwNSRNLKQTNWdPfnag6luIf/1y6pzKMSLO/u1WeLCduvVnunQk/Pakv7kmuHLh/TVfaR/Of/rq9WybefKfaeFQeHFiPnqt4hQFMyNO9icStKhS9OgUfLDc+3SgeK6bPTYhujEYfXeoribY+y7WtyZQeimUOvJbeCjUunNiPjnrfDWl9S6ftG1d6iLUrh4JdOZPPjSiI1iI9OpZfjjoMmpa+ysTtinWPHLgpl0Mum+Tu3Pc/ngmffXlP/slvnZbd+3SOzIdKOQaf/3vsCiX/G9ZezFVmXLtPEAAAD6dFJOUwD+/v3+/v4DAQENBv4m/v77/v48V/7+/v7+Gf7+sf45kf7+7/3suuPY5GIZ/qS1++T+nf5uTsV9hv3P8bP9cOqQW+T8kXfty9/l2////////////////////////////////////////////////////////////////////////////v/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+/////////////////v////////5JdFh1AAAMH0lEQVRYw4zVe1CS6R4HcFQQ1HG1zUuujk2utz213dsuu3O6TrNzBOQgxnkDISVAD1mkYiqIKIKykpiOgLpiqJimiWXm7Zj3+zXvt7yk6Z5G7TJZTVtnzgPqaTp19vT89c4wz4fv+/x+v/eBwT63UEjk+pOZ2cYTEomCfeHS7zbdanXI1dXdzf3IEddTBzeb63/4IgIFtpse3/uzUbOD4b6T+07a2+/bZX96n+tBc5MvIXTbzY/9PJHdZnTExc3Nxd3Nzd3F3eX0X3btOu1qtR0Q/yc9DHZgp3PrfJuRoYORg63tjydO/AjWiaNuRid3/W7vctAMhjT5o/+HbT/m/PqwgyHY7FRr29xUW1s7gUDYOjnZIoyMDAHhbvUHIVAo2IETryPbDI0QtrVNSwin0SYnJ6dXw8PPneaViFrbpjZAnNy7/X8JJijYMWLIYbAd0beAcLDZUTs/ARJ4vnryqnK0EVFZ2dfX1Pz490m3rZ8XUDCznZGH2wydbSsdVnoXKh17bZtA7H3gdRB9T5739RUjlpoQzUr7bS5/+pyAgpnuHDu8p3fOYXKyeOV9M8JwwVokgqtEIq7YYtLe0PZd8fxSU5+zs/Lktsd//lRAocx2jnQ7Ns8hDBd7jEp69zh2twdFJIeRyXi6wD9KIay2R2TPv+sSN08oH29b+EQwQaJ2jigfN09UP343adjmqGzJTL0cUENlMmV4jZxCga4Q0lj2cy12NnuKnZULn2ZAoo49ctzzqHN+wXJ5Wdm23ElcjUxNDQnSQBDEENA1EC2KwrbrMWzpKllpm9MJH58kEnb8kbWyu3NZ2tnbrXQuwRCxUmL26NDZu4Hx8fG3zvqw/aFxApvEmixR2rR1LTeubHPfjvwgIE3Mj1orG1dbpKvYw219vh4Yj7lecX9SaOiFwLr7KZyM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',
  name: 'test',
};

try {
  const { result, ...httpResponse } = await utilsController.uploadImage(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Mint

```ts
async mint(
  body: MintRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MintRequest`](#mint-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const body: MintRequest = {
  address: '0x820b22D8956565C0b7c1f3844Da29Ef25e689222',
  amount: 10000000000000,
};

try {
  const { result, ...httpResponse } = await utilsController.mint(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

### Order

#### Create Order

```ts
async createOrder(
  body: CreateOrderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateOrderRequest`](#create-order-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const bodyGroupInvestData: GroupInvestData = {
  projectId: '60b1e15ff3789bfa21a7b115',
  quantity: 10,
  originalUnitPrice: 50,
};

const bodyBilling: Billing = {
  description: 'chang~ ko\' gi` ca~',
};

const body: CreateOrderRequest = {
  userId: '60b09ade0249700afe4121af',
  itemId: '1',
  type: 'buystake',
  createdAt: 1622003329,
  description: 'test tho^i ma`',
  price: 500,
  status: 'pending',
  receiver: '',
  amount: 0,
  groupInvestData: bodyGroupInvestData,
  billing: bodyBilling,
};

try {
  const { result, ...httpResponse } = await orderController.createOrder(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Transfer

```ts
async transfer(
  body: TransferRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TransferRequest`](#transfer-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const body: TransferRequest = {
  receiver: '0x511682AF30D6dC6a79319dd5BBa8A8BC03EA2Fb8',
  amount: 1000000000,
};

try {
  const { result, ...httpResponse } = await orderController.transfer(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Get Balance of Account

```ts
async getBalanceOfAccount(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
try {
  const { result, ...httpResponse } = await orderController.getBalanceOfAccount();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Set Revenue

```ts
async setRevenue(
  body: SetRevenueRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SetRevenueRequest`](#set-revenue-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const body: SetRevenueRequest = {
  projectId: '0xc19b5C49127cA121f88c062a5963214048Bf2302',
  totalRevenue: 10000000,
};

try {
  const { result, ...httpResponse } = await orderController.setRevenue(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Receive Funds

```ts
async receiveFunds(
  body: ReceiveFundsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ReceiveFundsRequest`](#receive-funds-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const body: ReceiveFundsRequest = {
  orderId: '',
  confirmedBy: '',
};

try {
  const { result, ...httpResponse } = await orderController.receiveFunds(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Distribute

```ts
async distribute(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
try {
  const { result, ...httpResponse } = await orderController.distribute();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### List Orders

```ts
async listOrders(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
try {
  const { result, ...httpResponse } = await orderController.listOrders();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Model Reference

### Structures

* [Login Admin Request](#login-admin-request)
* [Register Admin Request](#register-admin-request)
* [Login Request](#login-request)
* [Register Request](#register-request)
* [Reset Password Request](#reset-password-request)
* [Request Password Confirm Request](#request-password-confirm-request)
* [Change Password Request](#change-password-request)
* [Update User Info Request](#update-user-info-request)
* [Add Project Request](#add-project-request)
* [Image](#image)
* [Feature Image](#feature-image)
* [Location](#location)
* [Province](#province)
* [Type of Real Estate](#type-of-real-estate)
* [Progression of Project](#progression-of-project)
* [State of Project](#state-of-project)
* [Type of Fundraise](#type-of-fundraise)
* [Detail Info](#detail-info)
* [Extra Property](#extra-property)
* [Update Project Request](#update-project-request)
* [Location 1](#location-1)
* [Upload Image Request](#upload-image-request)
* [Mint Request](#mint-request)
* [Create Order Request](#create-order-request)
* [Group Invest Data](#group-invest-data)
* [Billing](#billing)
* [Transfer Request](#transfer-request)
* [Set Revenue Request](#set-revenue-request)
* [Receive Funds Request](#receive-funds-request)

#### Login Admin Request

##### Class Name

`LoginAdminRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Required | - |
| `password` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "username": "adminkardia",
  "password": "adminkardia"
}
```

#### Register Admin Request

##### Class Name

`RegisterAdminRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | - |
| `lastName` | `string` | Required | - |
| `username` | `string` | Required | - |
| `password` | `string` | Required | - |
| `email` | `string` | Required | - |
| `isVerified` | `boolean` | Required | - |

##### Example (as JSON)

```json
{
  "first_name": "",
  "last_name": "",
  "username": "adminkardiatest01",
  "password": "adminkardiatest01",
  "email": "adminkardiatest01@gmail.com",
  "is_verified": false
}
```

#### Login Request

##### Class Name

`LoginRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Required | - |
| `password` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "username": "trongdang001",
  "password": "trongdang001"
}
```

#### Register Request

##### Class Name

`RegisterRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | - |
| `lastName` | `string` | Required | - |
| `username` | `string` | Required | - |
| `password` | `string` | Required | - |
| `email` | `string` | Required | - |
| `isVerified` | `boolean` | Required | - |

##### Example (as JSON)

```json
{
  "first_name": "",
  "last_name": "",
  "username": "dangtrongtest010",
  "password": "dangtrongtest010",
  "email": "dangtrongtest010@gmail.com",
  "is_verified": false
}
```

#### Reset Password Request

##### Class Name

`ResetPasswordRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "email": "dtrong97vn@gmail.com"
}
```

#### Request Password Confirm Request

##### Class Name

`RequestPasswordConfirmRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Required | - |
| `token` | `string` | Required | - |
| `password` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "username": "ductrong97",
  "token": "460795",
  "password": "kardiachain@123"
}
```

#### Change Password Request

##### Class Name

`ChangePasswordRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `password` | `string` | Required | - |
| `newPassword` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "password": "kardiachain@123",
  "new_password": "123@kardiachain"
}
```

#### Update User Info Request

##### Class Name

`UpdateUserInfoRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | - |
| `lastName` | `string` | Required | - |
| `sex` | `string` | Required | - |
| `phone` | `string` | Required | - |
| `birthday` | `number` | Required | - |
| `avatar` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "first_name": "Trong",
  "last_name": "Dang",
  "sex": "male",
  "phone": "0981870191",
  "birthday": 1620895114,
  "avatar": "http://s3."
}
```

#### Add Project Request

##### Class Name

`AddProjectRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `images` | [`Image[]`](#image) | Required | - |
| `featureImage` | [`FeatureImage`](#feature-image) | Required | - |
| `title` | `string` | Required | - |
| `name` | `string` | Required | - |
| `shortDescription` | `string` | Required | - |
| `location` | [`Location`](#location) | Required | - |
| `typeOfRealEstate` | [`TypeOfRealEstate`](#type-of-real-estate) | Required | - |
| `progressionOfProject` | [`ProgressionOfProject[]`](#progression-of-project) | Required | - |
| `stateOfProject` | [`StateOfProject`](#state-of-project) | Required | - |
| `typeOfFundraise` | [`TypeOfFundraise`](#type-of-fundraise) | Required | - |
| `fundraiseExpiration` | `number` | Required | - |
| `projectRatingByTpa` | `string` | Required | - |
| `generalInfo` | `string` | Required | - |
| `detailInfo` | [`DetailInfo`](#detail-info) | Required | - |
| `fundraiseProposal` | `string` | Required | - |
| `forecastProfit` | `number` | Required | - |
| `forecastProfitRatio` | `number` | Required | - |
| `price` | `number` | Required | - |
| `totalSupply` | `number` | Required | - |
| `unitPrice` | `number` | Required | - |

##### Example (as JSON)

```json
{
  "status": "draft",
  "images": [
    {
      "image_name": "",
      "image_url": "",
      "uploaded_by": "",
      "order": 1
    }
  ],
  "feature_image": {
    "image_name": "",
    "image_url": "",
    "uploaded_by": "",
    "order": 1
  },
  "title": "căn hộ ven biển dự án Mimo",
  "name": "chung cu An Phu quan 2, test admin 01",
  "short_description": "string",
  "location": {
    "department_number": "Mã căn 05-08, tầng 2, block D2",
    "street": "Đường Nguyễn Đức Cảnh",
    "ward": "Phường Châu Phú",
    "district": "Quận 9",
    "province": {
      "key": "can_tho",
      "value": "Cần Thơ"
    },
    "country_code": "VN"
  },
  "type_of_real_estate": {
    "key": "can_ho_chung_cu",
    "value": "Căn hộ chung cư"
  },
  "progression_of_project": [
    {
      "key": "sap_mo_goi_von",
      "value": "sắp mở gọi vốn",
      "date": 1622263635,
      "order": 1,
      "is_active": true
    }
  ],
  "state_of_project": {
    "key": "dang mo ban",
    "value": "dang_mo_ban"
  },
  "type_of_fundraise": {
    "key": "cam_ket",
    "value": "cam kết"
  },
  "fundraise_expiration": 0,
  "project_rating_by_tpa": "AAA",
  "general_info": "string",
  "detail_info": {
    "richtext": "string",
    "real_estate_status": "Đang xây dựng",
    "real_estate_legal_status": "Chưa có sổ hồng",
    "block": "string",
    "floor": "string",
    "total_area": "string",
    "usable_area": "string",
    "number_of_bed_room": 1,
    "number_of_bath_room": 1,
    "balcony_direction": "string",
    "view_sight": "view sông",
    "door_direction": "string",
    "apartment_id": "string",
    "extra_properties": [
      {
        "key": "số ban công",
        "value": "5",
        "is_display_on_general_info": true
      }
    ]
  },
  "fundraise_proposal": "richtext",
  "forecast_profit": 6000,
  "forecast_profit_ratio": 0.1,
  "price": 5000,
  "total_supply": 100,
  "unit_price": 50
}
```

#### Image

##### Class Name

`Image`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `imageName` | `string` | Required | - |
| `imageUrl` | `string` | Required | - |
| `uploadedBy` | `string` | Required | - |
| `order` | `number` | Required | - |

##### Example (as JSON)

```json
{
  "image_name": "",
  "image_url": "",
  "uploaded_by": "",
  "order": 1
}
```

#### Feature Image

##### Class Name

`FeatureImage`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `imageName` | `string` | Required | - |
| `imageUrl` | `string` | Required | - |
| `uploadedBy` | `string` | Required | - |
| `order` | `number` | Required | - |

##### Example (as JSON)

```json
{
  "image_name": "",
  "image_url": "",
  "uploaded_by": "",
  "order": 1
}
```

#### Location

##### Class Name

`Location`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `departmentNumber` | `string` | Required | - |
| `street` | `string` | Required | - |
| `ward` | `string` | Required | - |
| `district` | `string` | Required | - |
| `province` | [`Province`](#province) | Required | - |
| `countryCode` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "department_number": "Mã căn 05-08, tầng 2, block D2",
  "street": "Đường Nguyễn Đức Cảnh",
  "ward": "Phường Châu Phú",
  "district": "Quận 9",
  "province": {
    "key": "can_tho",
    "value": "Cần Thơ"
  },
  "country_code": "VN"
}
```

#### Province

##### Class Name

`Province`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Required | - |
| `value` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "key": "can_tho",
  "value": "Cần Thơ"
}
```

#### Type of Real Estate

##### Class Name

`TypeOfRealEstate`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Required | - |
| `value` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "key": "can_ho_chung_cu",
  "value": "Căn hộ chung cư"
}
```

#### Progression of Project

##### Class Name

`ProgressionOfProject`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Required | - |
| `value` | `string` | Required | - |
| `date` | `number` | Required | - |
| `order` | `number` | Required | - |
| `isActive` | `boolean` | Required | - |

##### Example (as JSON)

```json
{
  "key": "sap_mo_goi_von",
  "value": "sắp mở gọi vốn",
  "date": 1622263635,
  "order": 1,
  "is_active": true
}
```

#### State of Project

##### Class Name

`StateOfProject`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Required | - |
| `value` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "key": "dang mo ban",
  "value": "dang_mo_ban"
}
```

#### Type of Fundraise

##### Class Name

`TypeOfFundraise`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Required | - |
| `value` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "key": "cam_ket",
  "value": "cam kết"
}
```

#### Detail Info

##### Class Name

`DetailInfo`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `richtext` | `string` | Required | - |
| `realEstateStatus` | `string` | Required | - |
| `realEstateLegalStatus` | `string` | Required | - |
| `block` | `string` | Required | - |
| `floor` | `string` | Required | - |
| `totalArea` | `string` | Required | - |
| `usableArea` | `string` | Required | - |
| `numberOfBedRoom` | `number` | Required | - |
| `numberOfBathRoom` | `number` | Required | - |
| `balconyDirection` | `string` | Required | - |
| `viewSight` | `string` | Required | - |
| `doorDirection` | `string` | Required | - |
| `apartmentId` | `string` | Required | - |
| `extraProperties` | [`ExtraProperty[]`](#extra-property) | Required | - |

##### Example (as JSON)

```json
{
  "richtext": "string",
  "real_estate_status": "Đang xây dựng",
  "real_estate_legal_status": "Chưa có sổ hồng",
  "block": "string",
  "floor": "string",
  "total_area": "string",
  "usable_area": "string",
  "number_of_bed_room": 1,
  "number_of_bath_room": 1,
  "balcony_direction": "string",
  "view_sight": "view sông",
  "door_direction": "string",
  "apartment_id": "string",
  "extra_properties": [
    {
      "key": "số ban công",
      "value": "5",
      "is_display_on_general_info": true
    }
  ]
}
```

#### Extra Property

##### Class Name

`ExtraProperty`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Required | - |
| `value` | `string` | Required | - |
| `isDisplayOnGeneralInfo` | `boolean` | Required | - |

##### Example (as JSON)

```json
{
  "key": "số ban công",
  "value": "5",
  "is_display_on_general_info": true
}
```

#### Update Project Request

##### Class Name

`UpdateProjectRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `images` | [`Image[]`](#image) | Required | - |
| `featureImage` | [`FeatureImage`](#feature-image) | Required | - |
| `title` | `string` | Required | - |
| `name` | `string` | Required | - |
| `shortDescription` | `string` | Required | - |
| `location` | [`Location1`](#location-1) | Required | - |
| `typeOfRealEstate` | [`TypeOfRealEstate`](#type-of-real-estate) | Required | - |
| `stateOfProject` | [`StateOfProject`](#state-of-project) | Required | - |
| `progressionOfProject` | [`ProgressionOfProject[]`](#progression-of-project) | Required | - |
| `typeOfFundraise` | [`TypeOfFundraise`](#type-of-fundraise) | Required | - |
| `fundraiseExpiration` | `number` | Required | - |
| `projectRatingByTpa` | `string` | Required | - |
| `generalInfo` | `string` | Required | - |
| `detailInfo` | [`DetailInfo`](#detail-info) | Required | - |
| `fundraiseProposal` | `string` | Required | - |
| `forecastProfit` | `number` | Required | - |
| `forecastProfitRatio` | `number` | Required | - |
| `price` | `number` | Required | - |
| `totalSupply` | `number` | Required | - |
| `unitPrice` | `number` | Required | - |
| `finalRevenue` | `number` | Required | - |
| `projectCode` | `string` | Required | - |
| `smcAddress` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "status": "status 9999",
  "images": [
    {
      "image_name": "9999",
      "image_url": "9999",
      "uploaded_by": "9999",
      "order": 9999
    }
  ],
  "feature_image": {
    "image_name": "9999",
    "image_url": "9999",
    "uploaded_by": "9999",
    "order": 9999
  },
  "title": "căn hộ ven biển dự án Mimo 9999",
  "name": "chung cu An Phu quan 2, test admin 01 9999",
  "short_description": "string 9999",
  "location": {
    "department_number": "Mã căn 05-08, tầng 2, block D2 9999",
    "street": "Đường Nguyễn Đức Cảnh 9999",
    "ward": "Phường Châu Phú 9999",
    "district": "Quận 9 9999",
    "province": "Cần Thơ 9999",
    "country_code": "VN 9999"
  },
  "type_of_real_estate": {
    "key": "can_ho_chung_cu 9999",
    "value": "Căn hộ chung cư 9999"
  },
  "state_of_project": {
    "key": "dang mo ban",
    "value": "dang_mo_ban"
  },
  "progression_of_project": [
    {
      "key": "sap_mo_goi_von",
      "value": "sắp mở gọi vốn",
      "date": 1622263635,
      "order": 1,
      "is_active": true
    }
  ],
  "type_of_fundraise": {
    "key": "cam_ket 9999",
    "value": "cam kết 9999"
  },
  "fundraise_expiration": 9999,
  "project_rating_by_tpa": "AAA 9999",
  "general_info": "string 9999",
  "detail_info": {
    "richtext": "string 9999",
    "real_estate_status": "Đang xây dựng 9999",
    "real_estate_legal_status": "Chưa có sổ hồng 9999",
    "block": "string 9999",
    "floor": "string 9999",
    "total_area": "string 9999",
    "usable_area": "string 9999",
    "number_of_bed_room": 9999,
    "number_of_bath_room": 9999,
    "balcony_direction": "string 9999",
    "view_sight": "view sông 9999",
    "door_direction": "string 9999",
    "apartment_id": "string 9999",
    "extra_properties": [
      {
        "key": "số ban công 9999",
        "value": "5 9999",
        "is_display_on_general_info": false
      }
    ]
  },
  "fundraise_proposal": "richtext 9999",
  "forecast_profit": 6000,
  "forecast_profit_ratio": 0.1,
  "price": 5000,
  "total_supply": 100,
  "unit_price": 50,
  "final_revenue": 0,
  "project_code": "HT_6E3F611C41",
  "smc_address": "0x1A002ACE2E192C796f5f19f02d61B8558Aa62BD6"
}
```

#### Location 1

##### Class Name

`Location1`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `departmentNumber` | `string` | Required | - |
| `street` | `string` | Required | - |
| `ward` | `string` | Required | - |
| `district` | `string` | Required | - |
| `province` | `string` | Required | - |
| `countryCode` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "department_number": "Mã căn 05-08, tầng 2, block D2 9999",
  "street": "Đường Nguyễn Đức Cảnh 9999",
  "ward": "Phường Châu Phú 9999",
  "district": "Quận 9 9999",
  "province": "Cần Thơ 9999",
  "country_code": "VN 9999"
}
```

#### Upload Image Request

##### Class Name

`UploadImageRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rawString` | `string` | Required | - |
| `name` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "raw_string": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUxpcaNxKdfBid7Jk9u3ZvLhrL2UQ9m5ff//zHBSRfDv3Obi6JdsKfHdsa2ANr2dVLqVTq97Lc2gP/Plutq+hs2wZcumXfTmuL+RPMadSv7++L2oeOLPmsOYVtW6c9e+jMihYZ2EVfrtwtW4ce7cn9W/iN/IlNzEkdjBjcadWM+scsy/nd66eMumZeverrShdtq/dtm/eOfOks26h/jnr/LnueTKh+LHkezWmu/bidjBiO7htdm6fZNpJti9h+PNjO3etPDepu7escazgeLFh9WucsCpfMSVTeHTl7WGP6+cb//nr//os//lq/3jn/7kpua6WtiiQ/nWdfzhlui+X//ptuCuTv7ko9mkRfHMaseSOua2Vvrad92sSvDIZ/vafdqmR//quPzinO3EZNafQfjVcvXQbvrYevXPavvdiMOMNK2JP7x/K7V7K+OyUtKgRPDDYfzfj/vcgvrdjP7hipliHcKGM/TLaP7ceciaQv7hg8+pVOWfQPrgksSUP+vBYfjTcNSlSdqsUMGaSo1YF9a1X8ijVc6bR7B1J7aQRc6aQMyWP//po6h6MeGbO/rXd8yLMcSDK/7efqBnH8yVOf/jk/LQb9ywVeDDfM2iSZFaGJReHNqpSv/nneG7YN2zUbqNOdSwWu/SjduWOJtnIfXSc/WvUryIMtWtUOG4VrKCNbaJPt+0V7WBLv/vuuLAZ//us+qkQ/WsSuysV76DL9SUP9WrTOSiS+jEaP7vwNSRNLKQTNWdPfnag6luIf/1y6pzKMSLO/u1WeLCduvVnunQk/Pakv7kmuHLh/TVfaR/Of/rq9WybefKfaeFQeHFiPnqt4hQFMyNO9icStKhS9OgUfLDc+3SgeK6bPTYhujEYfXeoribY+y7WtyZQeimUOvJbeCjUunNiPjnrfDWl9S6ftG1d6iLUrh4JdOZPPjSiI1iI9OpZfjjoMmpa+ysTtinWPHLgpl0Mum+Tu3Pc/ngmffXlP/slvnZbd+3SOzIdKOQaf/3vsCiX/G9ZezFVmXLtPEAAAD6dFJOUwD+/v3+/v4DAQENBv4m/v77/v48V/7+/v7+Gf7+sf45kf7+7/3suuPY5GIZ/qS1++T+nf5uTsV9hv3P8bP9cOqQW+T8kXfty9/l2////////////////////////////////////////////////////////////////////////////v/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+/////////////////v////////5JdFh1AAAMH0lEQVRYw4zVe1CS6R4HcFQQ1HG1zUuujk2utz213dsuu3O6TrNzBOQgxnkDISVAD1mkYiqIKIKykpiOgLpiqJimiWXm7Zj3+zXvt7yk6Z5G7TJZTVtnzgPqaTp19vT89c4wz4fv+/x+v/eBwT63UEjk+pOZ2cYTEomCfeHS7zbdanXI1dXdzf3IEddTBzeb63/4IgIFtpse3/uzUbOD4b6T+07a2+/bZX96n+tBc5MvIXTbzY/9PJHdZnTExc3Nxd3Nzd3F3eX0X3btOu1qtR0Q/yc9DHZgp3PrfJuRoYORg63tjydO/AjWiaNuRid3/W7vctAMhjT5o/+HbT/m/PqwgyHY7FRr29xUW1s7gUDYOjnZIoyMDAHhbvUHIVAo2IETryPbDI0QtrVNSwin0SYnJ6dXw8PPneaViFrbpjZAnNy7/X8JJijYMWLIYbAd0beAcLDZUTs/ARJ4vnryqnK0EVFZ2dfX1Pz490m3rZ8XUDCznZGH2wydbSsdVnoXKh17bZtA7H3gdRB9T5739RUjlpoQzUr7bS5/+pyAgpnuHDu8p3fOYXKyeOV9M8JwwVokgqtEIq7YYtLe0PZd8fxSU5+zs/Lktsd//lRAocx2jnQ7Ns8hDBd7jEp69zh2twdFJIeRyXi6wD9KIay2R2TPv+sSN08oH29b+EQwQaJ2jigfN09UP343adjmqGzJTL0cUENlMmV4jZxCga4Q0lj2cy12NnuKnZULn2ZAoo49ctzzqHN+wXJ5Wdm23ElcjUxNDQnSQBDEENA1EC2KwrbrMWzpKllpm9MJH58kEnb8kbWyu3NZ2tnbrXQuwRCxUmL26NDZu4Hx8fG3zvqw/aFxApvEmixR2rR1LTeubHPfjvwgIE3Mj1orG1dbpKvYw219vh4Yj7lecX9SaOiFwLr7KZyM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",
  "name": "test"
}
```

#### Mint Request

##### Class Name

`MintRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | `string` | Required | - |
| `amount` | `bigint` | Required | - |

##### Example (as JSON)

```json
{
  "address": "0x820b22D8956565C0b7c1f3844Da29Ef25e689222",
  "amount": 10000000000000
}
```

#### Create Order Request

##### Class Name

`CreateOrderRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Required | - |
| `itemId` | `string` | Required | - |
| `type` | `string` | Required | - |
| `createdAt` | `number` | Required | - |
| `description` | `string` | Required | - |
| `price` | `number` | Required | - |
| `status` | `string` | Required | - |
| `receiver` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `groupInvestData` | [`GroupInvestData`](#group-invest-data) | Required | - |
| `billing` | [`Billing`](#billing) | Required | - |

##### Example (as JSON)

```json
{
  "user_id": "60b09ade0249700afe4121af",
  "item_id": "1",
  "type": "buystake",
  "created_at": 1622003329,
  "description": "test tho^i ma`",
  "price": 500,
  "status": "pending",
  "receiver": "",
  "amount": 0,
  "group_invest_data": {
    "project_id": "60b1e15ff3789bfa21a7b115",
    "quantity": 10,
    "original_unit_price": 50
  },
  "billing": {
    "description": "chang~ ko' gi` ca~"
  }
}
```

#### Group Invest Data

##### Class Name

`GroupInvestData`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Required | - |
| `quantity` | `number` | Required | - |
| `originalUnitPrice` | `number` | Required | - |

##### Example (as JSON)

```json
{
  "project_id": "60b1e15ff3789bfa21a7b115",
  "quantity": 10,
  "original_unit_price": 50
}
```

#### Billing

##### Class Name

`Billing`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "description": "chang~ ko' gi` ca~"
}
```

#### Transfer Request

##### Class Name

`TransferRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `receiver` | `string` | Required | - |
| `amount` | `number` | Required | - |

##### Example (as JSON)

```json
{
  "receiver": "0x511682AF30D6dC6a79319dd5BBa8A8BC03EA2Fb8",
  "amount": 1000000000
}
```

#### Set Revenue Request

##### Class Name

`SetRevenueRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Required | - |
| `totalRevenue` | `number` | Required | - |

##### Example (as JSON)

```json
{
  "project_id": "0xc19b5C49127cA121f88c062a5963214048Bf2302",
  "total_revenue": 10000000
}
```

#### Receive Funds Request

##### Class Name

`ReceiveFundsRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `string` | Required | - |
| `confirmedBy` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "order_id": "",
  "confirmed_by": ""
}
```

## Common Code Documentation

### ApiResponse

An interface for the result of an API call.

#### Properties

| Name | Type | Description |
|  --- | --- | --- |
| request | HttpRequest | Original request that resulted in this response. |
| statusCode | number | Response status codee. |
| headers | Record<string, string> | Response headers. |
| result | T | Response data. |
| body | string \| Blob \| NodeJS.ReadableStream | Original body from the response. |

### ApiError

Thrown when the HTTP status code is not okay.

The ApiError extends the ApiResponse interface, so all ApiResponse properties are available.

#### Properties

| Name | Type | Description |
|  --- | --- | --- |
| request | HttpRequest | Original request that resulted in this response. |
| statusCode | number | Response status codee. |
| headers | Record<string, string> | Response headers. |
| result | T | Response data. |
| body | string \| Blob \| NodeJS.ReadableStream | Original body from the response. |

