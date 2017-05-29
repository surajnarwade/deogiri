
Blockly.JavaScript['version'] = function(block) {
  var text_version_name = block.getFieldValue('version');
  var statements_version = Blockly.JavaScript.statementToCode(block, 'version');

  var dict12 = {};
        a = statements_version.split("!");


        aq = a[a.length - 2];

        b = JSON.parse(aq);

 dict12['version'] = text_version_name;
dict12['services'] = b;
//dict12['Services'] = {"null":"22", "redis":"22", "redis":"22"};
//dict['Services'] = {web: "", red: "", fg: ""};
  code = JSON.stringify(dict12);
  return code;
};



var dicto = {};

Blockly.JavaScript['service_name'] = function(block) {1
  var text_service_name = block.getFieldValue('service_name');
  var statements_service_name = Blockly.JavaScript.statementToCode(block, 'service_name');


    a = statements_service_name.split("!");


         function jsonConcat(o1, o2) {
          for (var key in o2) {
           o1[key] = o2[key];
          }
          return o1;
         }
    var config = {};
    for(i = 0; i< a.length-1; i++){


             q = JSON.parse(a[i]);
             config = jsonConcat(config, q);


           }



   dicto[text_service_name] = config;

 var code = JSON.stringify(dicto);
// return "suraj";
 return code+"!";
};

Blockly.JavaScript['image_name'] = function(block) {
  var value_image_name = Blockly.JavaScript.valueToCode(block, 'image_name', Blockly.JavaScript.ORDER_ATOMIC);
    value_image_name = value_image_name.replace(/[{()}]/g, '');
 var dict = {};
  dict['image'] = value_image_name;
  var code = JSON.stringify(dict);
  return code+'!';
};

Blockly.JavaScript['ports'] = function(block) {
  var statements_ports = Blockly.JavaScript.statementToCode(block, 'ports');
             a = statements_ports.split("!");
             a.splice(a.length-1, 1);
              a[0] = a[0].trim();
            var dict = {};
            dict['ports'] = a;

   var code = JSON.stringify(dict);
  return code+'!';
};


Blockly.JavaScript['page_text'] = function(block) {
  var text_text = block.getFieldValue('page_text');
  var code = text_text;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['restart'] = function(block) {
  var text_restart = block.getFieldValue('restart');
    var dict = {};
    dict['restart'] = text_restart;
  var code = JSON.stringify(dict);
  return code+'!';
};

//
Blockly.JavaScript['container_name'] = function(block) {
  var value_container_name = Blockly.JavaScript.valueToCode(block, 'container_name', Blockly.JavaScript.ORDER_ATOMIC);

     value_container_name = value_container_name.replace(/[{()}]/g, '');
  var dict = {};
   dict['container_name'] = value_container_name;
   var code = JSON.stringify(dict);
   return code+'!';
};

Blockly.JavaScript['labels'] = function(block) {
  var statements_labels = Blockly.JavaScript.statementToCode(block, 'labels');
             a = statements_labels.split("!");
             a.splice(a.length-1, 1);
              a[0] = a[0].trim();
            var dict = {};
            dict['labels'] = a;

   var code = JSON.stringify(dict);
  return code+'!';
};

Blockly.JavaScript['label_output'] = function(block) {
  var text_label_output = block.getFieldValue('label_output');
  var code = text_label_output.trim();
  return code+'!';
};

Blockly.JavaScript['environment'] = function(block) {
  var statements_environment = Blockly.JavaScript.statementToCode(block, 'environment');
             a = statements_environment.split("!");
             a.splice(a.length-1, 1);
              a[0] = a[0].trim();
            var dict = {};
            dict['env'] = a;

   var code = JSON.stringify(dict);
  return code+'!';
};

Blockly.JavaScript['args'] = function(block) {
  var statements_args = Blockly.JavaScript.statementToCode(block, 'args');
             a = statements_args.split("!");
             a.splice(a.length-1, 1);
              a[0] = a[0].trim();
            var dict = {};
            dict['args'] = a;

   var code = JSON.stringify(dict);
  return code+'!';
};

Blockly.JavaScript['env_file'] = function(block) {
  var value_env_file = Blockly.JavaScript.valueToCode(block, 'env_file', Blockly.JavaScript.ORDER_ATOMIC);
    value_env_file = value_env_file.replace(/[{()}]/g, '');
 var dict = {};
  dict['env_file'] = value_env_file;
  var code = JSON.stringify(dict);
  return code+'!';
};

Blockly.JavaScript['links'] = function(block) {
  var statements_links = Blockly.JavaScript.statementToCode(block, 'links');
             a = statements_links.split("!");
             a.splice(a.length-1, 1);
              a[0] = a[0].trim();
            var dict = {};
            dict['links'] = a;

   var code = JSON.stringify(dict);
  return code+'!';
};

Blockly.JavaScript['cap_add'] = function(block) {
  var statements_links = Blockly.JavaScript.statementToCode(block, 'cap_add');
             a = statements_links.split("!");
             a.splice(a.length-1, 1);
              a[0] = a[0].trim();
            var dict = {};
            dict['cap_add'] = a;

   var code = JSON.stringify(dict);
  return code+'!';
};

Blockly.JavaScript['cap_drop'] = function(block) {
  var statements_links = Blockly.JavaScript.statementToCode(block, 'cap_drop');
             a = statements_links.split("!");
             a.splice(a.length-1, 1);
              a[0] = a[0].trim();
            var dict = {};
            dict['cap_drop'] = a;

   var code = JSON.stringify(dict);
  return code+'!';
};