/**
 *	@summary file to implement code for 2nd complement challenge on js course
 *	@author Ivan Talijancic <italijancic@outlook.com>
 *
 *	Create at: 04/08/2022 - 17:00hs
 * **/

/**
 * @description Class representing a a user
 * **/
class User {

	/**
	 * Create a user object
	 * @param {string} 	username
	 * @param {string} 	email
	 * @param {string} 	passwword
	 * @param {array}	devices Array of devices objets
	 *
	 * **/
	constructor(username, email, password, devices){
		this.username = username
		this.email = email
		this.password = password
		this.devices = devices
		this.creationDate = new Date()
	}

	getUsername(){
		return this.username
	}

	getEmail(){
		return this.email
	}

	getPassword(){
		return this.password
	}

	setUsername(username){
		this.username = username
	}

	setEmail(email) {
		this.email = email
	}

	setPassword(password) {
		this.password = password
	}

	getDevices() {
		if (this.devices.length != 0) {
			return this.devices
		} else {
			console.error('This user has not devices!')
		}
	}

	getDeviceById(id) {
		if (this.devices.length != 0) {
			const foundDevice = this.devices.find((device) => (device.id === id))

			if (foundDevice !== undefined) {
				return foundDevice
			} else {
				console.error('Device ID does not exist on devices list')
			}
		} else {
			console.error('This user has not devices!')
		}
	}

	addDevice(newDevice) {
		const foundDevice = this.devices.find((device) => (device.id === newDevice.id))
		if (foundDevice === undefined) {
			this.devices.push(newDevice)
		} else {
			console.error('Device ID alreadey exist on this user devices list')
		}
	}

	addDevices(newDevices) {
		newDevices.forEach((newDevice) => this.addDevice(newDevice))
	}
}

/**
 * @description Class to represent a device
 * **/
class Device {

	/**
	 * Create a device object
	 * @param {string} model 	string to identificate device model
	 * @param {string} id		string unique for any device
	 * @param {string} name		descriptive name for device, asing by user
	 * @param {string} location	string to indicate device location
	 * **/
	constructor(model, id, name, location) {
		this.model = model
		this.id = id
		this.name = name
		this.location = location
	}
}

// Create devices
const devices =[]
devices.push(new Device('T700', '08:3a:f2:49:8d:7c', 'Sensor de Temperatura', 'Oficina dyt'))
devices.push(new Device('CEM', 'cc:50:e3:82:f0:6a', 'Tablero General BT', 'AGENPIA'))
devices.push(new Device('IoTgw-MT','8c:4b:14:10:a0:40', 'Celda MT Ensayo', 'Parque Industrial Avda'))
devices.push(new Device('IoTgw-BT', '8c:4b:14:0e:7f:58', 'TGBT', 'AGENPIA'))

console.log('Devices list')
console.log('-----------')
console.log(devices)
console.log('\r\n')

// Create users
const users = []
users.push(new User('italijancic', 'italijancic@dytsoluciones.com.ar', '12345678', []))
users.push(new User('cdomenje', 'cdomenje@dytsoluciones.com.ar', '12345678', []))
users.push(new User('espesot', 'espesot@dytsoluciones.com.ar', '12345678', []))

console.log('Users list')
console.log('----------')
console.log(users)
console.log('\r\n')

// Add device to user
users[0].addDevices(devices.slice(0,2))
users[1].addDevices(devices.slice(1,4))


// Check functión to read all devices for an specific user name
console.log('italijancic devices list')
console.log('------------------------')
console.log(users.find(user => user.username === 'italijancic').getDevices())
console.log('\r\n')

console.log('cdomenje devices list')
console.log('---------------------')
console.log(users.find(user => user.username === 'cdomenje').getDevices())
console.log('\r\n')


// Check function to get an specifyc device (selected by name) for an user
console.log('italijancic device.id = cc:50:e3:82:f0:6a')
console.log('------------------------------------------')
console.log(users.find(user => user.username === 'italijancic').getDeviceById('cc:50:e3:82:f0:6a'))
console.log('\r\n')

console.log('cdomenje device.id = 8c:4b:14:10:a0:40')
console.log('---------------------------------------')
console.log(users.find(user => user.username === 'cdomenje').getDeviceById('8c:4b:14:10:a0:40'))
console.log('\r\n')

// Check errors
console.log('Errors checks')
console.log('-------------')
console.log(users.find(user => user.username === 'italijancic').getDeviceById('cc:50:e3:82:33:6a'))
console.log(users.find(user => user.username === 'espesot').getDeviceById('cc:50:e3:82:f0:6a'))
// Check error when try to add a device that allready exist on user's devices list
users[0].addDevice(devices[0])